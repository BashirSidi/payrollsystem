'use client'

import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';

import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import Head from 'next/head';
import { OverviewBudget, } from '../sections/overview/overview-budget'
import { OverviewLatestOrders } from '../sections/overview/overview-latest-orders';
import { OverviewSales } from '../sections/overview/overview-sales';
import { OverviewTasksProgress } from '../sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from '../sections/overview/overview-total-customers';
import { OverviewTotalProfit } from '../sections/overview/overview-total-profit';
import React from 'react'
import {data} from './mock';
import styles from './styles.modules.css';

const Page = () => (
  <DashboardLayout>
    <Head>
      <title> {data.title} </title>
    </Head>
    <Box
      component="main"
      sx={{flexGrow: 1, py: 8}}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget
              difference={12}
              positive
              className='full-height'
              value="$24k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              className='full-height'
              value="1.6k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress
              className='full-height'
              value={75.5}
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3} >
            <OverviewTotalProfit className='full-height' value="$15k" />
          </Grid>
          <Grid
            xs={12}
            lg={12}
          >
            <OverviewSales
              chartSeries={data.chart}
              className='full-height'
            />
          </Grid>
          <Grid xs={12} md={12} lg={12} >
            <OverviewLatestOrders
              orders={data.orders}
              className='full-height'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </DashboardLayout>
);

export default Page;