import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddEditModal({open,handleClose,createRestaurant}) {
    const [state,setState]=useState("");



const handleChange=(event)=>{
    setState(event.target.value);

}

const handleClick=()=>{
    createRestaurant(state)
}

  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField id="outlined-basic" onChange={handleChange} label="Restaurant Name" variant="outlined" />
        <Button variant="contained"  onClick={handleClick}>Create</Button>

        </Box>
      </Modal>
    </div>
  );
}
