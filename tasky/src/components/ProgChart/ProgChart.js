import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { CalContainer } from './styles';
import { getMessage} from '@/utils/docs';



const ProgChart = (params) => {
  const [countBacklog, setCountBacklog] = useState(0);
  const [countToDo   , setCountToDo] = useState(0);
  const [countInProg, setcountInProg]= useState(0);
  const [countDone   , setCountDone] = useState(0);


  
  useEffect(()=>{
    var cBkLg = 0;
    var cToDo = 0;
    var cInProg = 0;
    var cDone =0;
    const tasks = params.tasks;

    tasks.forEach(task => {
      if(task.data.status == 1){cBkLg += 1;}
      if(task.data.status == 2){cToDo += 1;}
      if(task.data.status == 3){cInProg += 1;}
      if(task.data.status == 4){cDone += 1;}
    });
    
    setCountBacklog(cBkLg);
    setCountToDo(cToDo);
    setcountInProg(cInProg);
    setCountDone(cDone);

  }, [params.tasks]);

  
  
  const data = [
    { country: 'Backlog', area: countBacklog },
    { country: 'ToDo', area: countToDo },
    { country: 'In Progress', area: countInProg },
    { country: 'Done', area: countDone },
  ];
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
