import PropTypes from 'prop-types';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Alkaleri', 
    'Bauchi', 
    'Bogoro', 
    'Damban', 
    'Dass', 
    'Darazo',
    'Giade',
    'Gamawa',
    'Ganjuwa',
    'Itas/Gadau',
    'Jama’are',
    'Katagum',
    'Kirfi',
    'Misau',
    'Ningi',
    'Shira',
    'Tafawa-Balewa',
    'Toro',
    'Warji',
    'Zaki',
  ],
  datasets: [
    {
      label: 'Employees',
      data: [
        605, 
        598, 
        300, 
        974, 
        1055, 
        1090,
        780,
        500,
        1200,
        1300,
        300,
        800,
        900,
        1010,
        850,
        900,
        1000,
        1200,
        700,
        500,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(100, 200, 150, 0.2)',
        'rgba(200, 50, 100, 0.2)',
        'rgba(50, 150, 200, 0.2)',
        'rgba(120, 80, 160, 0.2)',
        'rgba(220, 120, 50, 0.2)',
        'rgba(80, 180, 70, 0.2)',
        'rgba(210, 70, 140, 0.2)',
        'rgba(40, 100, 220, 0.2)',
        'rgba(170, 30, 90, 0.2)',
        'rgba(60, 160, 210, 0.2)',
        'rgba(90, 130, 180, 0.2)',
        'rgba(30, 170, 120, 0.2)',
        'rgba(160, 110, 40, 0.2)',
        'rgba(140, 180, 60, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(200, 50, 100, 1)',
        'rgba(100, 200, 150, 1)',
        'rgba(50, 150, 200, 1)',
        'rgba(120, 80, 160, 1)',
        'rgba(220, 120, 50, 1)',
        'rgba(80, 180, 70, 1)',
        'rgba(210, 70, 140, 1)',
        'rgba(40, 100, 220, 1)',
        'rgba(170, 30, 90, 1)',
        'rgba(60, 160, 210, 1)',
        'rgba(90, 130, 180, 1)',
        'rgba(30, 170, 120, 1)',
        'rgba(160, 110, 40, 1)',
        'rgba(140, 180, 60, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  aspectRatio: 1.5,

  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

export const OverviewSales = (props) => {
  const { chartSeries, sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader
        action={(
          <Button
            color="inherit"
            size="small"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowPathIcon />
              </SvgIcon>
            )}
          >
            Sync
          </Button>
        )}
        title="Employees"
      />
      <CardContent>
        <Pie 
          options={options}
          data={data}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
        >
          Overview
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewSales.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object
};
