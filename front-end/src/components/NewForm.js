import { useState } from "react";
import { Modal, Button, Box, TextField } from "@mui/material";

const { REACT_APP_API_URL } = process.env;

function NewForm({ fetchProjects }) {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    author: "",
    netlifyLink: "",
    gitHubLink: "",
    screenshot: "",
    extraFeatures: [],
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    textAlign: "center",
    p: 3,
    borderRadius: 2,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleText = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setInfo({ ...info, screenshot: e.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let key in info) {
      formData.append(key, info[key]);
    }

    const response = await fetch(REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*",
      },
      body: formData,
    });

    const data = await response.json();
    console.log("data", data);

    if (info.name && info.author && info.netlifyLink && info.screenshot) {
      fetchProjects();
      handleClose();
    }
  };

  return (
    <div className="modal">
      <Button
        onClick={() => setOpen(true)}
        sx={{
          padding: 2,
          color: `rgba(3, 71, 62, 0.9)`,
          marginTop: 3,
          backgroundColor: "snow",
          transition: "all 0.5s ease",
          "&:hover": {
            backgroundColor: `rgba(49, 78, 74, 0.05)`,
          },
        }}
      >
        Add your project
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Project Info Form</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Project Name"
              variant="outlined"
              onChange={handleText}
              className="input"
              style={{ margin: 5 }}
              required
            />
            <TextField
              id="author"
              label="Your Name"
              variant="outlined"
              onChange={handleText}
              className="input"
              style={{ margin: 5 }}
              required
            />
            <TextField
              id="netlifyLink"
              label="Deployed Netlify Link"
              variant="outlined"
              onChange={handleText}
              className="input"
              style={{ margin: 5 }}
              required
            />
            <TextField
              id="gitHubLink"
              label="GitHub Link"
              variant="outlined"
              onChange={handleText}
              className="input"
              style={{ margin: 5 }}
            />
            <TextField
              id="extraFeatures"
              label="Extra Features"
              variant="outlined"
              onChange={handleText}
              className="input"
              style={{ margin: 5 }}
            />
            <div className="screenshot-input">
              <label for="screenshot" class="custom-file-upload">
                Upload a screenshot of your site
              </label>
              <input
                type="file"
                id="screenshot"
                onChange={handleFile}
                className="input"
                required
              />
            </div>
            <Button
              className=""
              type="submit"
              sx={{
                paddingLeft: 5,
                paddingRight: 5,
                color: `rgba(3, 71, 62, 0.9)`,
                margin: 1,
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: `rgba(49, 78, 74, 0.05)`,
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default NewForm;
