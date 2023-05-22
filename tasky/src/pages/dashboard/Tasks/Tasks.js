import React, { useState, useEffect } from "react";
import {
  MainContainer,
  Title,
  SearchTask,
  SearchContainer,
  CreateTaskButton,
  ButtonTitle,
  TaskContainer,
} from "./styles";
import Image from "next/image";
import Task from "../Task/Task";

const Tasks = (props) => {
  useEffect(()=>{
    setTasks(taskList.filter((task) => task.Sprint === props.selectedSprint));
  },[props.selectedSprint]);

  const [query, setQuery] = useState("");
  const typeOneTask = {
    Description: "Make Wallpaper",
    Priority: "red",
    Assignee: "Bar",
    Sprint: 8,
    Status: "IN PROGRESS",
    Nick: "TAS",
    TaskNum: "1"
  };
  const typeTwoTask = {
    Description: "Make Other Stuff",
    Priority: "red",
    Assignee: "Sappir",
    Sprint: 3,
    Status: "DONE",
    Nick: "GAN",
    TaskNum: "2"
  };

  const typeThreeTask = {
    Description: "Add Reviews",
    Priority: "green",
    Assignee: "Sappir",
    Sprint: 3,
    Status: "IN PROGRESS",
    Nick: "GAN",
    TaskNum: "2"
  };

  const typeTwoThree = {
    Description: "Install OpenCV",
    Priority: "green",
    Assignee: "Elad",
    Sprint: 9,
    Status: "IN REVIEW",
    Nick: "EMB",
    TaskNum: "3"
  };
  const taskList = [
    typeOneTask,
    typeOneTask,
    typeOneTask,
    typeOneTask,
    typeTwoTask,
    typeTwoTask,
    typeOneTask,
    typeTwoTask,
    typeTwoTask,
    typeTwoTask,
    typeTwoTask,
    typeTwoTask,
    typeTwoThree,
    typeTwoThree,
    typeTwoThree,
    typeTwoThree,
    typeTwoThree,
    typeTwoThree,
    typeThreeTask,
  ];

  const onSearch = (event) => {
    if (!event.target.value) {
      setTasks(taskList.filter((task)=>(task.Sprint === props.selectedSprint)));
    } else {
      setTasks(
        tasks.filter(
          (task) =>
            task.Description.includes(event.target.value) ||
            task.Description.toLowerCase().includes(event.target.value)
        )
      );
    }
  };
  const [tasks, setTasks] = useState(
    taskList.filter((task) => (task.Sprint === props.selectedSprint))
  );

  if (props.selectedSprint === -1) {
  return (
    <MainContainer>
      <Title>Home Page</Title>
      <TaskContainer>
        
      </TaskContainer>
    </MainContainer>
  );
        } else {
          return (
            <MainContainer>
              <Title>Backlog</Title>
              <SearchContainer>
                <SearchTask
                  placeholder="Search backlog"
                  onChange={onSearch}
                />
                <Image
                  src="./Search.svg"
                  width={15}
                  height={15}
                  style={{ marginLeft: "-2%", marginTop: "0.6%", cursor: "pointer" }}
                  onClick={() => {
                    setTasks(onSearch);
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
                {tasks.map((task) => (
                  <Task
                    color={task.Priority}
                    assignee={task.Assignee}
                    description={task.Description}
                    status={task.Status}
                    nick={task.Nick}
                    taskNum={task.TaskNum}
                  />
                ))}
              </TaskContainer>
            </MainContainer>
          );
        };
        }


export default Tasks;
