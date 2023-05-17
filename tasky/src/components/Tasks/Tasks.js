import React, { useState } from "react";
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
import Task from "@/components/Task/Task";

const Tasks = () => {
  const [query, setQuery] = useState("");
  const typeOneTask = {
    Description: "Make Wallpaper dsajdksajkiu",
    Priority: "red",
    Assignee: ["Bar", "Sappir", "Elad", "Hagai"],
  };
  const typeTwoTask = {
    Description: "Make  Great",
    Priority: "green",
    Assignee: ["Bar", "Sappir", "Elad", "Hagai"],
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
    typeTwoTask,
    typeTwoTask,
    typeTwoTask,
  ];

  const onSearch = (event) => {
    if (!event.target.value) {
      setTasks(taskList);
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
  const [tasks, setTasks] = useState(taskList);
  return (
    <MainContainer>
      <Title>Backlog</Title>
      <SearchContainer>
        <SearchTask
          placeholder="Search backlog"
          onChange={onSearch}
        ></SearchTask>
        <Image
          src="./Search.svg"
          width={15}
          height={15}
          style={{ marginLeft: "-2%", marginTop: "0.6%", cursor: "pointer" }}
          onClick={() => {
            setTasks(tasks.filter((task) => task.Description.includes(query)));
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
          />
        ))}
      </TaskContainer>
    </MainContainer>
  );
};

export default Tasks;
