import { useState, useEffect } from "react";
import { Modal, Button, Typography, Box, TextField } from "@mui/material";

function NewForm() {
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
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {};

  const handleText = (e) => {
    setInfo(info);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <TextField id="name" label="Project Name" variant="outlined" />
            <TextField id="author" label="Your Name" variant="outlined" />
            <TextField
              id="netlifyLink"
              label="Deployed Netlify Link"
              variant="outlined"
            />
            <TextField
              id="netlifyLink"
              label="Deployed Netlify Link"
              variant="outlined"
            />

            <input type="file" id="screenshot" />

            <TextField
              id="extraFeatures"
              label="Extra Features"
              variant="outlined"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default NewForm;
