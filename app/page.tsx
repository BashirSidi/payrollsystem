"use client"
import { AppDispatch } from './redux/store';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  Container,
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import {Layout as AuthLayout} from '@/app/layouts/auth/layout'
import { useState } from 'react';


function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
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
    onSubmit: async (values, helpers) => {
      try {
        console.log('submitted', values)
        // router.push('/');
      } catch (err) {
        console.error('Login failed.')
      }
    }
  });
  
  return (
      <AuthLayout>
       <Head>
        <title>
          Login
        </title>
      </Head>
      <Box
        sx={{
          background: '#fcf6eb',
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
            background: '#fcf6eb',
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
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    background: '#3D0C11',
                    color: '#fcf6eb',
                    '&:hover': {
                      backgroundColor: '#3D0C11',
                      border: "none",
                      boxShadow: "none",
                      color: '#fcf6eb'
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
  )
}

export default Home;