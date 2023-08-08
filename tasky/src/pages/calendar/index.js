import * as React from "react";
import { useState, useEffect } from "react";
import { getMessage, postMessage } from "../../controller/APIController";
import { Container, ContentContainer } from "./styles";
import { ModalProvider } from "styled-react-modal";
import Calendar from "@/components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import ProgChart from "@/components/ProgChart/ProgChart";
import EventOps from "@/components/EventOps/EventOps";
import Scheduler from "@/components/Scheduler/Scheduler";

const CalendarPage = (props) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [tasks , setTasks ] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await getMessage(`event/getAllEventsByUID/${uid}`);
        const responseTasks = await getMessage(`task/getTaskByUid/${uid}`);
        if (response ) {
          setEvents(response);
        }
        if (responseTasks ) {
          setTasks(responseTasks);
          // console.log(tasks)
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

  const testUid = "kxiLDVVioyaLKVESr0XTFAr6QiD3";
  const uid = props.user.uid;

  return (
    <ModalProvider>
      <Container>
        <ContentContainer>
          <Calendar 
            onDateReceived={handleDateChange} 
          />
          <Scheduler 
            date={date}
            uid={uid}
            events={events}
          />
        </ContentContainer>
        <ContentContainer>
          <ProgChart 
            uid={uid}
            tasks={tasks}
          />
          <EventOps 
            date={date}
            uid={uid}
            events={events}
            tasks={tasks}
            user={props.user}
          />
        </ContentContainer>
      </Container>
    </ModalProvider>
  );
};

export default CalendarPage;
