import * as React from 'react';
import  {useState} from 'react';
import { Container, ContainerRaw, ContentContainer } from './styles';
import { ModalProvider } from "styled-react-modal";
import Calendar from '@/components/Calendar/Calendar';
import Header from '../../components/Header/Header';
import ProgChart from '@/components/ProgChart/ProgChart';
import EventList from '@/components/EventList/EventList';
import Scheduler from '@/components/Scheduler/Scheduler';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const CalendarPage = () => {
  return (
    <ModalProvider>
      <Container>
        <Header />
        <ContentContainer>
            <Calendar />
            <Scheduler />
        </ContentContainer>
        <ContentContainer>
            <ProgChart />
            <EventList />
        </ContentContainer>
      </Container>
    </ModalProvider>
  );
}


export default CalendarPage;