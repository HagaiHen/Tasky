import * as React from "react";
import { useState, useEffect } from "react";
import Joyride from 'react-joyride';
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
  const uid = props.user.uid;
  const [render, reRender] = useState(false);

  const [steps] = useState([
    {
      target: ".calendar-component", 
      content: "This is Your Calendar! Here you will select a date, in order to see your daily schedule for that day or create and duplicate tasks for that day!",
      title:"Pick A date Section!"
    },
    {
      target: ".scheduler-component",
      content: "This is your Scheduler! Here You will see All the Events For schdualed for this date (the date you just pick, remmember?)",
      title:"Scheduler Section!"
    },
    {
      target: ".events-component",
      content: "Here You can create, update, copy and delete events for you personal schedular!",
      title:"Lot Of Fun Bottoms!"
    },
    {
      target: ".progChart-component",
      content: "Ok, you Have Some Tasks to do and you want to see where are in the progress? No Problem! All your Tasks summerized into one easy to read Chart!",
      title:"Progress Chart!"
    },
  ]);

  const reRenderPage = () => {
    console.log("______________________________________")
    reRender(prev => !prev);
  }
  
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
  }, [date, render]);
  
  const handleDateChange = (date) => {
    setDate(date);
  };

  console.log("[----------] isOnboarding = ", props.isOnboarding);

  return (
    <ModalProvider>
      <Container>
      {props.isOnboarding && (
          <Joyride
            steps={steps}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
          />
        )}
        <ContentContainer>
            <Calendar 
              onDateReceived={handleDateChange}
              className="calendar-component"
            />
          <Scheduler 
            date={date}
            uid={uid}
            events={events}
            className="scheduler-component"
          />
        </ContentContainer>
        <ContentContainer>
          <ProgChart 
            uid={uid}
            tasks={tasks}
            className="progChart-component"
          />
          <EventOps 
            date={date}
            uid={uid}
            events={events}
            tasks={tasks}
            user={props.user}
            reRender={reRenderPage}
            classNameA="events-component"
          />
        </ContentContainer>
      </Container>
    </ModalProvider>
  );
};

export default CalendarPage;
