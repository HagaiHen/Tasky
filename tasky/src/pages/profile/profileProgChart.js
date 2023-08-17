import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { CalContainer, ProfileTextTitle } from './styles';



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

    console.log("TASSSKS", tasks);

    tasks.forEach(task => {
      if(task.data.status == 0){cBkLg += 1;}
      if(task.data.status == 1){cToDo += 1;}
      if(task.data.status == 2){cInProg += 1;}
      if(task.data.status == 3){cDone += 1;}
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
        <Chart data={chartData}>
          <PieSeries valueField="area" argumentField="country" />
            <ProfileTextTitle>Progress Chart</ProfileTextTitle>
          <Legend />
          <Animation />
        </Chart>
    </CalContainer>
  );
};

export default ProgChart;
