import React from 'react';
import { Paper } from '@mui/material';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { CalContainer } from './styles';

const data = [
  { country: 'Backlog', area: 12 },
  { country: 'ToDo', area: 8 },
  { country: 'In Progress', area: 4 },
  { country: 'Done', area: 2 },
];

const ProgChart = () => {
  const chartData = data;

  return (
    <CalContainer>
      <Paper>
        <Chart data={chartData}>
          <PieSeries valueField="area" argumentField="country" />
          <Title text="My Tasks - Progress Pie" />
          <Legend />
          <Animation />
        </Chart>
      </Paper>
    </CalContainer>
  );
};

export default ProgChart;
