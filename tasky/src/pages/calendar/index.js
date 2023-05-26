import * as React from 'react';
import  {useState} from 'react';
import { Container, ContentContainer } from './styles';
import { ModalProvider } from "styled-react-modal";
import Calendar from '@/components/Calendar/Calendar';
import Header from '../../components/Header/Header';
import ProgChart from '@/components/ProgChart/ProgChart';
import EventOps from '@/components/EventOps/EventOps';
import Scheduler from '@/components/Scheduler/Scheduler';
import { useEffect } from 'react';




const CalendarPage = () => {
  const [_date, _setDate] = useState(new Date());
  const [_dateStr, _setDateStr] = useState( "00/00/1900" ); // The Date as it passed to the Scheduler

  useEffect(()=>{
      console.log("[CalendarPage] Page Rendered.");
  }),[_date, _dateStr]

  const _handleDateReceived = (date) => {
    _setDate(date);
    _setDateStr( _date.toString() );
    console.log("[CalendarPage] new Date updated ");
    console.log(_date);
  };

  return (
    <ModalProvider>
      <Container>
        <Header />
        <ContentContainer>
            <Calendar onDateReceived={_handleDateReceived}/>
            <Scheduler 
              date={_dateStr}
            />
        </ContentContainer>
        <ContentContainer>
            <ProgChart />
            <EventOps  />
        </ContentContainer>
      </Container>
    </ModalProvider>
  );
}


export default CalendarPage;