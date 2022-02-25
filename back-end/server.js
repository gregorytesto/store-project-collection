const cors = require("cors");
const express = require("express");
let fs = require("fs");
const multer = require("multer");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const name = req.body.author;
    cb(null, (name + "-" + file.originalname).toLowerCase().replace(/\s/g, ""));
  },
});

const upload = multer({ storage: storage });

const readFromFile = () => {
  let data = JSON.parse(fs.readFileSync("./data.json"));
  return data;
};

app.get("/", (req, res, next) => {
  try {
    res.json(readFromFile());
  } catch (error) {
    next(error);
  }
});

app.post("/", upload.single("screenshot"), (req, res, next) => {
  function finished() {
    try {
      console.log("all set", req.body);
    } catch (error) {
      next(error);
    }
  }

  try {
    let dataToAdd = [
      ...readFromFile(),
      { ...req.body, screenshot_url: req.file?.filename },
    ];
    let data = JSON.stringify(dataToAdd, null, 2);
    fs.writeFile("./data.json", data, finished);
    res.json({ success: "true good job" });
  } catch (error) {
    next(error);
  }
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
