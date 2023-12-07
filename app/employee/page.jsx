'use client'

import {
  Box,
  Button,
  Card,
  CardHeader,
  Container
} from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";

import { Layout as DashboardLayout } from '../layouts/dashboard/layout'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Head from 'next/head'
import Loader from '../components/Loader'
import { Scrollbar } from '../components/scrollbar';
import { SeverityPill } from '../components/severity-pill';
// import { getAllEmployees } from '../redux/features/employeeSlice/thunk';
import EmployeeModalForm from './modal/EmployeeForm';

const statusMap = {
  pending: 'warning',
  active: 'success',
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'firstAndMiddleName',
    headerName: 'First(& Middle) Name',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.middleName || ''}`,
  },
  { field: 'lastName', headerName: 'Last Name', width: 160 },
  { field: 'jobTitle', headerName: 'Job Title', width: 130 },
  { 
    field: 'employmentStatus', 
    headerName: 'Status', 
    width: 130,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <SeverityPill color={statusMap[params.row.employmentStatus]}>
          {params.row.employmentStatus}
        </SeverityPill>
      );
   }
  },
  { field: 'subUnit', headerName: 'Sub Unit', width: 130,},
  { field: 'supervisor', headerName: 'Supervisor', width: 130,},
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 150,
    renderCell: () =>
      <Box>
        <DeleteOutlinedIcon />
        <EditOutlinedIcon />
      </Box>
  },
];


const Page = () => {
  const [open, setOpen] = React.useState(false);
  // const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);
  
  useEffect(() => {
    // dispatch(
    //   getAllEmployees({})
    // )
  }, [])

  if(employee.employeeStatus === "loading"){
    return (
      <Loader />
    )
  }
  return (
    <>
      <EmployeeModalForm
         open={open}
         onClose={() => setOpen(false)}
      />
      <DashboardLayout>
        <Head>
          <title>Employee</title>
        </Head>
        <Box
          component="main"
          sx={{flexGrow: 1, py: 5}}
        >
          <Container maxWidth="xl">
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{ 
                mb: 2, 
                bgcolor: '#004225',
                '&:hover': {
                  backgroundColor: '#004225',
                },
              }}
            >
              Add Employee
            </Button>
            <Card>
              <CardHeader title="Employees" />
                <Box>
                <Scrollbar sx={{ flexGrow: 1 }}>
                {employee?.employee?.data && 
                <DataGrid
                  rows={employee?.employee?.data}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />}
                </Scrollbar>
                </Box>
            </Card>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default Page