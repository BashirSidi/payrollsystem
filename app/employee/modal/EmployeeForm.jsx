import React, {useEffect} from 'react'
import * as Yup from 'yup';
import { 
  Box, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Grid, 
  IconButton, 
  Modal, 
  TextField, 
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useFormik } from 'formik';
import {fetchAllLga} from '../../redux/features/dataSlice/thunk';
// import { toast } from "react-toastify";


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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchAllLga());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('data all lga list', data.lgaList)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      employeeId: '',
      gender: '',
      gender: '',
      nin: '',
      lga: '',
      residentialAddress: '',
      qualification: '',
      mda: '',
    },
    validationSchema: Yup.object({
      firstName: Yup
        .string()
        .max(255)
        .required('First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required('Last name is required'),
      middleName: Yup
        .string()
        .max(255),
      employeeId: Yup
        .string()
        .max(255),
      gender: Yup
        .string()
        .max(255),
      nin: Yup
        .string()
        .max(255),
      lga: Yup
        .string()
        .max(255),
      residentialAddress: Yup
        .string()
        .max(255),
      qualification: Yup
        .string()
        .max(255),
      mda: Yup
        .string()
        .max(255),
    }),
    onSubmit: async (values) => {
      // my code goes here
    }
  });

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
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
            >
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
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="middleName"
                    fullWidth
                    id="middleName"
                    label="Middle Name"
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

              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                      labelId="gender"
                      required
                      id="gender"
                      // value={gender}
                      label="Gender"
                      name="gender"
                      // onChange={}
                    >
                      <MenuItem value='men'>Men</MenuItem>
                      <MenuItem value='female'>Female</MenuItem>
                      <MenuItem value='other'>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="nin"
                    label="NIN"
                    name="nin"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="lga">L.G.A</InputLabel>
                    <Select
                      labelId="lga"
                      required
                      id="lga"
                      name='lga'
                      // value={lga}
                      label="L.G.A"
                      // onChange={}
                    >
                      <MenuItem value='Alkaleri'>Alkaleri</MenuItem>
                      <MenuItem value='Bauchi'>Bauchi</MenuItem>
                      <MenuItem value='Bogoro'>Bogoro</MenuItem>
                      <MenuItem value='Damban'>Damban</MenuItem>
                      <MenuItem value='Dass'>Dass</MenuItem>
                      <MenuItem value='Darazo'>Darazo</MenuItem>
                      <MenuItem value='Giade'>Giade</MenuItem>
                      <MenuItem value='Gamawa'>Gamawa</MenuItem>
                      <MenuItem value='Ganjuwa'>Ganjuwa</MenuItem>
                      <MenuItem value='Itas/Gadau'>Itas/Gadau</MenuItem>
                      <MenuItem value='Jama’are'>Jama’are</MenuItem>
                      <MenuItem value='Katagum'>Katagum</MenuItem>
                      <MenuItem value='Kirfi'>Kirfi</MenuItem>
                      <MenuItem value='Misau'>Misau</MenuItem>
                      <MenuItem value='Ningi'>Ningi</MenuItem>
                      <MenuItem value='Shira'>Shira</MenuItem>
                      <MenuItem value='Tafawa-Balewa'>Tafawa-Balewa</MenuItem>
                      <MenuItem value='Toro'>Toro</MenuItem>
                      <MenuItem value='Warji'>Warji</MenuItem>
                      <MenuItem value='Zaki'>Zaki</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="residentialAddress"
                    label="Residential Address"
                    name="residentialAddress"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="qualification">Qualification</InputLabel>
                    <Select
                      labelId="qualification"
                      required
                      id="qualification"
                      // value={qualification}
                      label="Qualification"
                      name="qualification"
                      // onChange={}
                    >
                      <MenuItem value='men'>---</MenuItem>
                      <MenuItem value='female'>---</MenuItem>
                      <MenuItem value='other'>---</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="mda">M.D.A</InputLabel>
                    <Select
                      labelId="mda"
                      required
                      id="mda"
                      // value={mda}
                      label="M.D.A"
                      name="mda"
                      // onChange={}
                    >
                      <MenuItem value='men'>---</MenuItem>
                      <MenuItem value='female'>---</MenuItem>
                      <MenuItem value='other'>---</MenuItem>
                    </Select>
                  </FormControl>
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