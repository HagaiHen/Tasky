import * as React from 'react';
import  {useState,useEffect} from 'react';
import { Container, ContainerRaw } from './styles';
import { DataBox } from '../Calendar/styles';
import EventButton from '../EventButton/EventButton';


const EventOps = (params) => {
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
          console.log("[EventOps] event.date is undefined");
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

  const userId = params.uid;
  const myTasks = params.tasks;

  return (
    <Container className={params.classNameA}>
      <ContainerRaw>
        <EventButton 
          uid={params.uid} 
          events={dayEvents}
          tasks={params.tasks}
          user={params.user}
          reRender={params.reRender}
        />
      </ContainerRaw>
        
    </Container>
    
  );
}


export default EventOps;