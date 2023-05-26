import * as React from "react";
import { useState } from "react";
import { CalContainer } from "./styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
const dayjs = require("dayjs");
const Calendar = (props) => {

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDate = (date) => {
    setSelectedDate(date);
    props.onDateReceived(date);
  };

  return (
    <CalContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="portrait"
          value={selectedDate}
          onChange={handleDate}
        />
      </LocalizationProvider>
    </CalContainer>
  );
};

export default Calendar;
