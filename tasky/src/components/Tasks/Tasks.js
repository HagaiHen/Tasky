import React from 'react';
import { MainContainer, Title, SearchTask, SearchContainer, CreateTaskButton, ButtonTitle, TaskContainer} from './styles';
import Image from 'next/image';
import Task from '@/components/Task/Task';

const Tasks = () => {
  return (
    <MainContainer>
      <Title>Backlog</Title>
      <SearchContainer>
        <SearchTask placeholder="Search backlog"></SearchTask>
        <Image
          src="./Search.svg"
          width={15}
          height={15}
          style={{ marginLeft: "-2%", marginTop: "0.6%", cursor: "pointer" }}
          onClick={() => {
            console.log("HI");
          }}
        />
        <CreateTaskButton>
          <Image
            src="./Plus.svg"
            width={15}
            height={15}
            style={{ marginTop: "4%", marginLeft: "4%" }}
          />
          <ButtonTitle>Create Task</ButtonTitle>
        </CreateTaskButton>
      </SearchContainer>
      <TaskContainer>
        <Task color="green" />
        <Task color="green" />
        <Task color="green" />
        <Task color="green" />
        <Task color="green" />
        <Task color="green" />
        <Task color="green" />
        <Task color="green" />
        
      </TaskContainer>
    </MainContainer>
  );
}

export default Tasks