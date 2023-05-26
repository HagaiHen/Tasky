import * as React from 'react';
import  {useState} from 'react';
import { CalContainer } from './styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calendar = ({ onDateReceived }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateReceived(date); // Call the prop function with the selected date
  };

  const [Date, setdDate] = useState(null);
  const handleDate = (date) => {
    setdDate(date);
    handleDateChange(date)
  };
  
  return (
    <CalContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              orientation="portrait" 
              value={Date}
              onChange={handleDate}
            />
        </LocalizationProvider>
    </CalContainer>
    
  );
}


export default Calendar;