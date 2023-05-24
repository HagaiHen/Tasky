import React, { useState } from "react";
import {
  TaskContainer,
  Title,
  StatusText,
  Selected,
} from "./styles";

export const MeetMini = (props) => {
  return (
    <TaskContainer>
      {/* <Priority color="red" /> */}
      <Title>{props.title}</Title>
            
      <Selected>
        <StatusText>{props.date}</StatusText>
      </Selected>

      <Selected>
        <StatusText>{props.hour}</StatusText>
      </Selected>   
      
    </TaskContainer>
  );
};

export default MeetMini;
