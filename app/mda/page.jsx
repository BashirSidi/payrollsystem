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
import Head from 'next/head'
import Loader from '../components/Loader'
import { Scrollbar } from '../components/scrollbar';
import { fetchAllMda } from '../redux/features/mdaSlice/thunk';
import withAuth from '../hocs/withAuth';

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    sortable: true,
    width: 600,
  },
  // {
  //   field: 'action',
  //   headerName: 'Action',
  //   sortable: false,
  //   width: 150,
  //   renderCell: () =>
  //     <Box>
  //       <DeleteOutlinedIcon />
  //       <EditOutlinedIcon />
  //     </Box>
  // },
];


const Page = () => {
  const dispatch = useDispatch();
  const mda = useSelector((state) => state.mda);

  useEffect(() => {
    dispatch(fetchAllMda());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {mda?.mdaList && 
                <DataGrid
                  rows={mda?.mdaList}
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

export default withAuth(Page);