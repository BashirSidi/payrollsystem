'use client'

import {
  Box,
  Card,
  CardHeader,
  Container
} from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Layout as DashboardLayout } from '../layouts/dashboard/layout'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Head from 'next/head'
import Loader from '../components/Loader'
import { Scrollbar } from '../components/scrollbar';
import { getAllMDAs } from '../redux/features/mdaSlice/thunk';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'title',
    headerName: 'Title',
    sortable: true,
    width: 600,
  },
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
  const mda = useSelector((state) => state.mda);

  useEffect(() => {
    dispatch(
        getAllMDAs({})
    )
  }, [])

  if(mda.status === "loading"){
    return (
      <Loader />
    )
  }
  return (
    <>
      <DashboardLayout>
        <Head>
          <title>MDAs</title>
        </Head>
        <Box
          component="main"
          sx={{flexGrow: 1, py: 5}}
        >
          <Container maxWidth="xl">
            <Card>
              <CardHeader title="Bauchi State MDAs" />
                <Box>
                <Scrollbar sx={{ flexGrow: 1 }}>
                {mda?.mda?.data && 
                <DataGrid
                  rows={mda?.mda?.data}
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