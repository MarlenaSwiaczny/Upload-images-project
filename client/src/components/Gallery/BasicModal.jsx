import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '50%',
  maxHeight: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
};

export default function BasicModal(props) {


  return (
    <>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><Box>
        <Button startIcon={<CancelIcon />} onClick={props.onClose} ></Button>
        <Box sx={style}>
          <img src={props.src} alt={props.alt} style={{maxWidth: '100%', maxHeight: '100%'}}/>
        </Box>
        </Box>
      </Modal>
    </>
  );
}