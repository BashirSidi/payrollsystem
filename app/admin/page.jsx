'use client'
import React, {useState} from 'react'
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { OverviewBudget } from '../sections/overview/overview-latest-orders'
import { OverviewLatestOrders } from '../sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from '../sections/overview/overview-latest-products';
import { OverviewSales } from '../sections/overview/overview-sales';
import { OverviewTasksProgress } from '../sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from '../sections/overview/overview-total-customers';
import { OverviewTotalProfit } from '../sections/overview/overview-total-profit';
import { OverviewTraffic } from '../sections/overview/overview-traffic';

const page = () => {
  return (
    <Box>Admin page</Box>
  )
}

export default page