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
import { getAllTasks, getSortedList } from "@/controller/TaskController";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";
import { postMessage } from "@/controller/APIController";

const getPriority = (task) => {

  const fib = [0, 2, 3, 5, 8, 13];
  const weight =
    (fib[task.urgency] + fib[task.buisnessValue] + fib[task.riskReduction]) /
    fib[task.devEffort];
  const maxValue = 15;
  const priority = (weight / maxValue) * 100;
  console.log("priority", priority);
  if (priority < 33) {
    return "green";
  } else if (priority < 66) {
    return "yellow";
  }
  return "red";
};


const Tasks = (props) => {
  const [myTasks, setMyTasks] = useState(false);
  const [updateUI, setUpdateUI] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState(props.project);
  const [sortedList, setSortedList] = useState([]);
  useEffect(() => {
    setProject(props.project);
  },[props.project]);
  useEffect(() => {
    const getTasks = async (sprintId) => {
      console.log(myTasks);
      if (!myTasks) {
      console.log("hello");
      const taskList = await getAllTasks(sprintId);
      console.log("taskList", taskList);
      setTasks(taskList);
      }
      else {
        
        const taskList = await getAllTasks(sprintId);
        console.log("taskList", taskList);
        const sortedIds = await getSortedList(taskList);
        console.log("sortedIds", sortedIds);
        
        const sortedTasks = sortedIds.map(taskId => {
          return taskList.find(task => task.taskId === taskId);
        });
        console.log("props", props);
        setSortedList(sortedIds);  // If you still need this state for some other purpose
        const filteredTasks = sortedTasks.filter(task => task.assigneeId === props.user.uid);
        setTasks(filteredTasks);
      }
    };
    
    getTasks(props.selectedSprint);

}, [props.selectedSprint, updateUI, myTasks]);
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

  const handleMyTasks = () => {
    setMyTasks(!myTasks);
  }

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
        tasks={tasks}
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

<CreateTaskButton onClick={handleMyTasks}>
    <ButtonTitle>{myTasks ? 'Show All Tasks' : 'Show My Tasks'}</ButtonTitle>
  </CreateTaskButton>

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
            tasks={tasks}
          />
        ))}
      </TaskContainer>
    </MainContainer>
  );
};

export default Tasks;