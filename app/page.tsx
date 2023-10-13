"use client"
import { Box, Container, Link, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './redux/store';


export default function Home() {
  const dispatch = useDispatch<AppDispatch>;
  return (
    <main>
      <Container>
        <Box>
          <Typography
            sx={{
              mt: { xs: '10px', md: '60px' },
              textAlign: 'center',
              color: '#3D0C11',
              fontSize:{ xs: '30px', md: '56px' },
              fontWeight: { xs: 500, md: 700 },
              lineHeight: '140%',
            }}
          >
            Payroll System
          </Typography>
        </Box>
        </Container>
    </main>
  )
}
