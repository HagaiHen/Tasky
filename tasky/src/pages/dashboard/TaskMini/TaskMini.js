import React, { useState } from "react";
import {
  TaskContainer,
  Priority,
  Title,
  StatusText,
  Selected,
} from "./styles";

export const TaskMini = (props) => {
  return (
    <TaskContainer>
      <Priority color="red" />
      <Title>{props.title}</Title>
            
      <Selected>
        <StatusText>{props.status}</StatusText>
      </Selected>

      <Selected>
        <StatusText>{props.assignee}</StatusText>
      </Selected>   
      
    </TaskContainer>
  );
};

export default TaskMini;
