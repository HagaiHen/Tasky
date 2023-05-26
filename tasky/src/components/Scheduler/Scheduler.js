import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { CalContainer } from '../Calendar/styles';
import { ScheduleComponent, Day, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
// import { appData } from './datasource';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];


const Scheduler = () => {
  const eventSettings = { dataSource: appData };
  const timeScale = { enable: true, slotCount: 5 };
    return(
      <CalContainer>
        <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
          <ViewsDirective>
            <ViewDirective option='Day' startHour='09:30' endHour='18:00' timeScale={timeScale} />
          </ViewsDirective>
          <Inject services={[Day]} />
        </ScheduleComponent>;
      </CalContainer>
    )
}

export default Scheduler;
