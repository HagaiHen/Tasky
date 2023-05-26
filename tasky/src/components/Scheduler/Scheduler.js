import * as React from 'react';
import { useEffect, useState } from 'react';
import { MainContainer,
  Title,
  SepLine,
  TasksTaskContainr,
  SearchTask,
  SearchContainer,
  CreateTaskButton,
  ButtonTitle,
  TaskContainer, } from './styles'
import DailyEvent from '../DailyEvent/DailyEvent';


const event1 = {
  Date: '23/6/2023',
  Hour: '15:00',
  Description:'Onboarding meeting'
}
const event2 = {
  Date: '15/6/2023',
  Hour: '08:00',
  Description:'Team meeting'
}
const event3 = {
  Date: '15/6/2023',
  Hour: '11:00',
  Description:'Work Out'
}
const event4 = {
  Date: '10/6/2023',
  Hour: '12:00',
  Description:'Work Out'
}
const event5 = {
  Date: '5/6/2023',
  Hour: '08:00',
  Description:'Team meeting'
}

  
const Scheduler = (props) => {
  const [_date, _setDate] = useState(props.date);

  useEffect(() => {
    // This function will be called whenever myVariable changes
    _setDate(props.date);
    console.log("[Scheduler] useEffect activate, Date:", props.date);
    // handleDateChange();
  }, [props.date]);

  // const handleDateChange = () => {
  //   // Perform Check-Print Here 
  //   _setDate(props.date);
  //   console.log('myVariable has changed:', _date);
  // };

  const arr = ["Event1", "Event2", "Event3", "Event4", "Event5", "Event6", "Event7", "Event8"];
  
    return(
      <MainContainer>
        <Title> Daily Scheduler </Title>
        <SepLine />
        <TasksTaskContainr>
          <TaskContainer>
            {arr.map((_event) => (
              <DailyEvent 
                description={_event}
              />
            ))}
          </TaskContainer>
        </TasksTaskContainr>
      </MainContainer>
    )
}

export default Scheduler;
