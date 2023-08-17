import * as React from "react";
import { useEffect, useState } from "react";
import {
  MainContainer,
  Title,
  SepLine,
  TasksTaskContainr,
  TaskContainer
} from "./styles";
import DailyEvent from "../DailyEvent/DailyEvent";
import { getMessage, postMessage } from "../../controller/APIController";

const Scheduler = (params) => {
  const [dayEvents, setDayEvents] = useState([]);
  useEffect( () => {
    var time = new Date(params.date);
    var year = time.getFullYear(); // Extract the year (e.g., 2023)
    var month = time.getMonth() + 1; // Extract the month (0-11, so we add 1 to get 1-12)
    var day = time.getDate(); // Extract the day (1-31)
    var hour = time.getHours(); // Extract the hour (0-23)
    
    
    const fetchData = () => {
      const newEvents = [];
      events.forEach(event => {
        if (event.Date) {
          var dateParts = event.Date.split("-");
          var yearE = dateParts[0];
          var monthE = dateParts[1].padStart(2, "0");;
          var dayE = dateParts[2].padStart(2, "0");;
          
          if (yearE == year && monthE == month && dayE == day) {
            newEvents.push(event);
          } 
        } else {
          console.log("[Scheduler] event.date is undefined");
        }
      });

      /**Sorting this day events according to their Hours */
      newEvents.sort((a, b) => {
        var aHourParts = a.Hour.split(":");
        var bHourParts = b.Hour.split(":");
  
        const ahh = parseInt(aHourParts[0], 10);
        const amm = parseInt(aHourParts[1], 10);
        
        const bhh = parseInt(bHourParts[0], 10);
        const bmm = parseInt(bHourParts[1], 10);
        
        if (ahh < bhh) {
          return -1; // a should come before b
        } else if (ahh > bhh) {
          return 1; // a should come after b
        } else {
          if (amm < bmm){
            return -1; // a should come before b
          }else if(amm > bmm){
            return 1; // a should come after b
          }else{
            return 0; // a and b have the same hour
          } 
        }
      });

      setDayEvents(newEvents);
    };


    fetchData();

  }, [params.events, params.date]);


  // console.log("[Scheduler] Events: ", params.events ? params.events : "none" );
  const events = params.events;
  const date = params.date;

  return (
    <MainContainer className={params.className}>
      <Title> Daily Scheduler </Title>
      <TasksTaskContainr>
        <TaskContainer>
          {dayEvents.map((event) => (
            <DailyEvent 
              Description={event.Description}
              Date={event.Date}
              Hour={event.Hour}
            />
          ))}
        </TaskContainer>
      </TasksTaskContainr>
    </MainContainer>
  );
};

export default Scheduler;
