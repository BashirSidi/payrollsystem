'use client'
import React, { useEffect } from 'react'
import { Layout as  DashboardLayout} from '../layouts/dashboard/layout'
import {
  Box,
  Card,
  CardHeader,
  Container
} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Scrollbar } from '../components/scrollbar'; 
import { SeverityPill } from '../components/severity-pill';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid } from '@mui/x-data-grid';
import Head from 'next/head'
import Loader from '../components/Loader'
import { getAllEmployees } from '../redux/features/employeeSlice/thunk';

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
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);
  useEffect(() => {
    dispatch(
      getAllEmployees({})
    )
  }, [employee.employee])

  if(employee.employeeStatus === "loading"){
    return (
      <Loader />
    )
  }
  return (
    <>
      <DashboardLayout>
        <Head>
          <title>Employee</title>
        </Head>
        <Box
          component="main"
          sx={{flexGrow: 1, py: 5}}
        >
          <Container maxWidth="xl">
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