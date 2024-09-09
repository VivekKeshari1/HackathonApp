import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ModalComponent({ open, id }) {
    let handleClose = () => { open(false) }
    const onCancel = () => {
        open(false);
    };
    console.log(id);

    const nevigate = useNavigate();

    const onDelete = () => {
        const CardDetails = JSON.parse(localStorage.getItem('cardDetails'));
        localStorage.setItem('cardDetails', JSON.stringify(
            CardDetails.filter((cd) => cd.id.toString() !== id)))
        console.log(CardDetails);

        nevigate("/");
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="border-none rounded-md">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete model
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        This action is irreversible. Are you sure you want to delete this model?
                    </Typography>
                    <Stack spacing={4} direction="row" className="mt-4">
                        <Button onClick={onCancel} variant="outlined">Cancel</Button>
                        <Button onClick={onDelete} variant="contained" color='error'>Delete</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalComponent;
