import * as React from "react";
import { useState } from "react";
import { Container, ContentContainer } from "./styles";
import { ModalProvider } from "styled-react-modal";
import Calendar from "@/components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import ProgChart from "@/components/ProgChart/ProgChart";
import EventOps from "@/components/EventOps/EventOps";
import Scheduler from "@/components/Scheduler/Scheduler";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log("changingDate", date.toString());
    setDate(date);
  };

  return (
    <ModalProvider>
      <Container>
        <Header />
        <ContentContainer>
          <Calendar onDateReceived={handleDateChange} />
          <Scheduler date={date} />
        </ContentContainer>
        <ContentContainer>
          <ProgChart />
          <EventOps />
        </ContentContainer>
      </Container>
    </ModalProvider>
  );
};

export default CalendarPage;
