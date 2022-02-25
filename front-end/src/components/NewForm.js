import { useState, useEffect } from "react";
import { Modal, Button, Typography, Box, TextField } from "@mui/material";

const { REACT_APP_API_URL } = process.env;

function NewForm() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    author: "",
    netlifyLink: "",
    gitHubLink: "",
    screenshot: {},
    extraFeatures: [],
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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

    handleClose();
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add your project</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Project Name"
              variant="outlined"
              onChange={handleText}
            />
            <TextField
              id="author"
              label="Your Name"
              variant="outlined"
              onChange={handleText}
            />
            <TextField
              id="netlifyLink"
              label="Deployed Netlify Link"
              variant="outlined"
              onChange={handleText}
            />
            <TextField
              id="gitHubLink"
              label="GitHub Link"
              variant="outlined"
              onChange={handleText}
            />

            <input type="file" id="screenshot" onChange={handleFile} />

            <TextField
              id="extraFeatures"
              label="Extra Features"
              variant="outlined"
              onChange={handleText}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default NewForm;
