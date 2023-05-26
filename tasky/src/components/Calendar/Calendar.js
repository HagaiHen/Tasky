import * as React from 'react';
import  {useState} from 'react';
import { CalContainer } from './styles';
import Header from '../../components/Header/Header';
import ProgChart from '@/components/ProgChart/ProgChart';
import Scheduler from '@/components/Scheduler/Scheduler';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calendar = () => {

  
  return (
    <CalContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker orientation="portrait" />
        </LocalizationProvider>
    </CalContainer>
    
  );
}


export default Calendar;