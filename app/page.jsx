"use client"

import * as Yup from 'yup';

import {
Box,
Button,
Stack,
TextField,
Typography
} from '@mui/material';

import {Layout as AuthLayout} from './layouts/auth/layout'
import Head from 'next/head';
import Loader from './components/Loader';
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from './redux/features/authSlice/thunk';

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values) => {
      try {
        let email = values.email;
        let password = values.password;
        dispatch(signIn({ email, password }))
          .then((res) => {
          if(res?.payload && authUser.user){
            router.push('/admin');
          }
        })
      } catch (error) {
        toast.error(error.message)
      }
    }
  });
  
  return (
      <>
        {authUser.loading ? <Loader /> : <>
        <AuthLayout>
       <Head>
        <title>
          Login
        </title>
      </Head>
      <Box
        sx={{
          background: '#F5F5DC',
          height: '100vh',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            background: '#F5F5DC',
            px: 3,
            py: '20px',
            marginTop: '-150px',
            width: '100%'
          }}
        >
          <Box>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
            </Stack>
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                {/* {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )} */}
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    background: '#004225',
                    color: '#F5F5DC',
                    '&:hover': {
                      backgroundColor: '#004225',
                      border: "none",
                      boxShadow: "none",
                      color: '#F5F5DC'
                    },
                    border: "none",
                    boxShadow: "none"
                   }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
          </Box>
        </Box>
      </Box>
      <Box sx={{display: { xs: 'none', md: 'flex' } }} className="ocean">
        <Box className="wave"></Box>
        <Box className="wave"></Box>
      </Box>
      </AuthLayout>
        </>}
      </>
  )
}

export default Home;
