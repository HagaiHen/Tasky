import * as React from "react";
import { useState, useEffect } from "react";
import { getMessage } from "@/utils/docs";
import { Container, ContentContainer } from "./styles";
import { ModalProvider } from "styled-react-modal";
import Calendar from "@/components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import ProgChart from "@/components/ProgChart/ProgChart";
import EventOps from "@/components/EventOps/EventOps";
import Scheduler from "@/components/Scheduler/Scheduler";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await getMessage(`event/getAllEventsByUID/${uid}`);
        if (response ) {
          setEvents(response);
        }
      } catch (error) {
        console.error("[Scheduler] Failed to fetch events:", error);
      }
    };
    fetchData();
  }, [date]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const testUid = "aqGgZVjzgJbdLGJdBrsetEod3om2";
  const uid = testUid;

  return (
    <ModalProvider>
      <Container>
        <Header />
        <ContentContainer>
          <Calendar 
            onDateReceived={handleDateChange} 
          />
          <Scheduler 
            date={date}
            uid={testUid}
            events={events}
          />
        </ContentContainer>
        <ContentContainer>
          <ProgChart />
          <EventOps 
            date={date}
            uid={testUid}
            events={events}
          />
        </ContentContainer>
      </Container>
    </ModalProvider>
  );
};

export default CalendarPage;
