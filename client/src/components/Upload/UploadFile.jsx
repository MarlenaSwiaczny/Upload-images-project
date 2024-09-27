import React from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

function UploadFile(props) {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const [file, setFile] = React.useState("")

  const handleChange = (event) => {
    props.setFileUrl("");
    setFile(event.target.files[0])
    
  }
  const uploadToServer = () => {
    if (!file) return;

    const url = `http://localhost:3003/upload`;
    const formData = new FormData();
    formData.append("file", file);

    axios.post(url, formData)
      .then(res => {
        props.setFileUrl(res.data.fileUrl);  // Ustawiam URL zwrócony przez serwer
      })
      .catch(err => console.log(err.message));
    setFile("");
  };

  
  return (
    
  <>
    {!file ? 
    
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      >
      Select file
        <VisuallyHiddenInput
          type="file"
          onChange={(event) =>{handleChange(event)}}  
        />
      </Button> 
:
<>
<div>
{file && file.type.startsWith('image/') && (<Stack direction="row" gap={4}>
  <Box sx={{
    justifyContent:{xs:"center", md:"flex-end"}, 
    display:{xs:"none", md: "flex"}, 
    flex:2}} >
  <h3>Selected File:</h3>
  </Box>
  <Box sx={{ direction:"row", flex:3}}>
    <Stack sx={{
      alignItems:{xs:"center", md:"start"}, 
      flexDirection:{xs:"column", md:"row"}, 
      gap:2}}>
  <img src={URL.createObjectURL(file)} alt="Selected" style={{height: '50px' }} />
  <p>{file.name}</p>
  </Stack>
  </Box>
  </Stack>
)}

</div>
<Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
  onClick={uploadToServer}
>
  Upload file
</Button>
</>
}
</>);
}

export default UploadFile;