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
import Task from "@/components/Task/Task";
import TaskModal from "../TaskModal/TaskModal";
import { getAllTasks } from "@/controller/TaskController";

const getPriority = (task) => {
  const fib = [2, 3, 5, 8, 13];
  const weight =
    (fib[task.Urgency] + fib[task.BuisnessValue] + fib[task.RiskReduction]) /
    fib[task.DevelopmentEffort];
  const maxValue = 3;
  const priority = (weight / maxValue) * 100;
  console.log("priority", priority, "task", task);
  if (priority < 33) {
    return "green";
  } else if (priority < 66) {
    return "yellow";
  }
  return "red";
};

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async (sprintId) => {
      const taskList = await getAllTasks(sprintId);
      setTasks(taskList);
    };
    getTasks(props.selectedSprint);
  }, [props.selectedSprint]);

  const onSearch = (event) => {
    if (!event.target.value) {
      setTasks({});
    } else {
      setTasks(
        tasks.filter(
          (task) =>
            task.description.includes(event.target.value) ||
            task.description.toLowerCase().includes(event.target.value)
        )
      );
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainContainer>
      <TaskModal isOpen={isOpen} toggleModal={toggleModal} />
      <Title>Backlog</Title>
      <SearchContainer>
        <SearchTask placeholder="Search backlog" onChange={onSearch} />
        <Image
          src="./Search.svg"
          width={15}
          height={15}
          style={{ marginLeft: "-2%", marginTop: "0.6%", cursor: "pointer" }}
          onClick={() => {
            setTasks(onSearch);
          }}
        />
        <CreateTaskButton onClick={toggleModal}>
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
            color={getPriority(task)}
            assignee={task?.assignee}
            description={task?.description}
            title={task?.title}
            key={Math.random()}
            task={task}
          />
        ))}
      </TaskContainer>
    </MainContainer>
  );
};

export default Tasks;
