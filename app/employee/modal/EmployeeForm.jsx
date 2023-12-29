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
import {useFormik} from 'formik';
import Loader from '../../components/Loader';
import {
  fetchAllLga,
  fetchQualifications,
} from '../../redux/features/dataSlice/thunk';
import {fetchAllMda} from '../../redux/features/mdaSlice/thunk';
import { addEmployee } from '../../redux/features/employeeSlice/thunk';
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
  const mda = useSelector((state) => state.mda);
  const employee = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchAllLga());
    dispatch(fetchQualifications());
    dispatch(fetchAllMda());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
    onSubmit: async (values, { resetForm }) => {
      dispatch(addEmployee(values)).then((res) => {
        if (res.payload) {
          resetForm();
          props?.onClose()
        }
      });
    }
  });


  return (
    <>
      {employee.loading ? <Loader /> : <>
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
                    error={!!(formik.touched.firstName && formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    error={!!(formik.touched.lastName && formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="middleName"
                    error={!!(formik.touched.middleName && formik.errors.middleName)}
                    helperText={formik.touched.middleName && formik.errors.middleName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.middleName}
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
                    error={!!(formik.touched.employeeId && formik.errors.employeeId)}
                    helperText={formik.touched.employeeId && formik.errors.employeeId}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.employeeId}
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
                      label="Gender"
                      name="gender"
                      error={!!(formik.touched.gender && formik.errors.gender)}
                      helperText={formik.touched.gender && formik.errors.gender}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                    >
                      <MenuItem value='men'>Male</MenuItem>
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
                    error={!!(formik.touched.nin && formik.errors.nin)}
                    helperText={formik.touched.nin && formik.errors.nin}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.nin}
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
                      label="L.G.A"
                      error={!!(formik.touched.lga && formik.errors.lga)}
                      helperText={formik.touched.lga && formik.errors.lga}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.lga}
                    >
                      {data.lgaList.map((lga) => (
                        <MenuItem 
                          key={lga.id}
                          value={lga.id}
                        >
                          {lga.name}
                        </MenuItem>
                      ))}
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
                    error={!!(formik.touched.residentialAddress && formik.errors.residentialAddress)}
                    helperText={formik.touched.residentialAddress && formik.errors.residentialAddress}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.residentialAddress}
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
                      label="Qualification"
                      name="qualification"
                      error={!!(formik.touched.qualification && formik.errors.qualification)}
                      helperText={formik.touched.qualification && formik.errors.qualification}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.qualification}
                    >
                      {data.qualificationList.map((qualification) => (
                        <MenuItem 
                          key={qualification.id}
                          value={qualification.id}
                        >
                          {qualification.title}
                        </MenuItem>
                      ))}
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
                      label="M.D.A"
                      name="mda"
                      error={!!(formik.touched.mda && formik.errors.mda)}
                      helperText={formik.touched.mda && formik.errors.mda}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.mda}
                    >
                      {mda.mdaList.map((mda) => (
                        <MenuItem 
                          key={mda.id}
                          value={mda.id}
                        >
                          {mda.title}
                        </MenuItem>
                      ))}
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
      </>}
    </>
  )
}

export default EmployeeForm