import React from 'react'
import { 
  Box, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Grid, 
  IconButton, 
  Modal, 
  TextField, 
  Typography 
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #004225',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const EmployeeForm = (props) => {

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Employee Form
          </Typography>
          <IconButton
            aria-label="close"
            onClick={props?.onClose}
            sx={{
              position: 'absolute',
              right: 25,
              top: 22,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box component="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    name="middleName"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="employeeId"
                    label="Employee ID"
                    name="employeeId"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Create Login Details"
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 1, 
                  mb: 2, 
                  bgcolor: '#004225',
                  '&:hover': {
                    backgroundColor: '#004225',
                  },
                }}
              >
                Create
              </Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default EmployeeForm