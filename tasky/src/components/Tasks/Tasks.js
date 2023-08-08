import React, { useState, useEffect } from "react";
import {
  MainContainer,
  Title,
  SearchTask,
  SearchContainer,
  CreateTaskButton,
  ButtonTitle,
  TaskContainer,
  SearchBarContainer,
} from "./styles";
import Image from "next/image";
import Task from "@/components/Task/Task";
import TaskModal from "../TaskModal/TaskModal";
import { getAllTasks } from "@/controller/TaskController";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";

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
  const [updateUI, setUpdateUI] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState(props.project);
  useEffect(() => {
    setProject(props.project);
  },[props.project]);
  useEffect(() => {
    const getTasks = async (sprintId) => {
      const taskList = await getAllTasks(sprintId);
      setTasks(taskList);
    };
    getTasks(props.selectedSprint);
  }, [props.selectedSprint, updateUI]);
  const rerenderTasks = () => {
    setUpdateUI((prev) => !prev);
  };
  const onSearch = (event) => {
    if (!event.target.value) {
      rerenderTasks();
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
  const updateProject = (data) => {
    setProject((prev) => ({ ...prev, ...data }));
  };
  return (
    <MainContainer>
      <TaskModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        project={project}
        sprint={props.selectedSprint}
        updateTasks={rerenderTasks}
        updateProject={updateProject}
      />
      <Title>Backlog</Title>
      <SearchContainer>
        <ProjectDropdown
          projects={props.projects}
          onSelect={props.onSelectProject}
        />
        <SearchBarContainer>
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
        </SearchBarContainer>

        <CreateTaskButton onClick={toggleModal}>
          <Image src="./Plus.svg" width={15} height={15} />
          <ButtonTitle>Create Task</ButtonTitle>
        </CreateTaskButton>
      </SearchContainer>
      <TaskContainer>
        {tasks.length && tasks.map((task) => (
          <Task
            color={getPriority(task)}
            assignee={task?.assignee}
            description={task?.description}
            title={task?.title}
            key={Math.random()}
            task={task}
            rerenderTasks={rerenderTasks}
            project={project}
            updateProject={updateProject}
          />
        ))}
      </TaskContainer>
    </MainContainer>
  );
};

export default Tasks;
