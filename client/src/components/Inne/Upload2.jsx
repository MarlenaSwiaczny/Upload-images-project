import React from 'react';
import axios from "axios";

function Upload2(props) {

  const [file, setFile] = React.useState("")

  const upload = () => {
    if (!file) return;

    const url = `http://localhost:3003/upload`;
    const formData = new FormData();
    formData.append("file", file);

    axios.post(url, formData)
      .then(res => {
        props.setFileUrl(res.data.fileUrl);  // Ustawienie URL zwróconego przez backend
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
      <button type="button" onClick={upload}>Upload</button>
    </div>
  );
}

export default Upload;

/*
<Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={(event) => console.log(event.target.files)}
    multiple
  />
</Button>
*/