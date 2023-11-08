'use client'
import React from 'react'
import { format } from 'date-fns';
import { Layout as  DashboardLayout} from '../layouts/dashboard/layout'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Container,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { data } from '../admin/mock';
import { Scrollbar } from '../components/scrollbar'; 
import { SeverityPill } from '../components/severity-pill';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid } from '@mui/x-data-grid';
import Head from 'next/head'

const statusMap = {
  pending: 'warning',
  active: 'success',
  refunded: 'error'
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
    renderCell: (params) =>
      <Box>
        <DeleteOutlinedIcon />
        <EditOutlinedIcon />
      </Box>
  },
];

const rows = [
  { id: 1, lastName: 'Snow', supervisor: 'test', subUnit: 'test', employmentStatus: 'pending', jobTitle: 'Test job', middleName: 'Test', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', supervisor: 'test', subUnit: 'test', employmentStatus: 'active', jobTitle: 'Test job', middleName: 'Test', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', supervisor: 'test', subUnit: 'test', employmentStatus: 'pending', jobTitle: 'Test job', middleName: 'Test', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', supervisor: 'test', subUnit: 'test', employmentStatus: 'active', jobTitle: 'Test job', middleName: 'Test', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', supervisor: 'test', subUnit: 'test', employmentStatus: 'pending', jobTitle: 'Test job', middleName: 'Test', firstName: 'Daenerys', age: 6 },
  { id: 6, lastName: 'Melisandre', supervisor: 'test', subUnit: 'test', employmentStatus: 'active', jobTitle: 'Test job', middleName: 'Test', firstName: 'Test', age: 150 },
  { id: 7, lastName: 'Clifford', supervisor: 'test', subUnit: 'test', employmentStatus: 'pending', jobTitle: 'Test job', middleName: 'Test', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', supervisor: 'test', subUnit: 'test', employmentStatus: 'active', jobTitle: 'Test job', middleName: 'Test', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', supervisor: 'test', subUnit: 'test', employmentStatus: 'pending', jobTitle: 'Test job', middleName: 'Test', firstName: 'Harvey', age: 65 },
];


const Page = () => {
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
                <Box sx={{ minWidth: 800 }}>
                <Scrollbar sx={{ flexGrow: 1 }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
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