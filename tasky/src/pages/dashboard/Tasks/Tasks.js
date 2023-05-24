import React, { useState, useEffect } from "react";
import {
  MainContainer,
  Title,
  SearchTask,
  SearchContainer,
  CreateTaskButton,
  ButtonTitle,
  TaskContainer,
  CreateSprintButton,
  BarContainer,
} from "./styles";
import CreateTaskModal from '../CreateTaskModal/CreateTaskModal';
import Image from "next/image";
import Task from "../Task/Task";
import { getMessage } from '../../../controller/APIController';
import { TaskMini } from '../TaskMini/TaskMini';
import { MeetMini } from '../MeetMini/MeetMini';
import { TitleMid } from "../TaskMini/styles";


const Tasks = (props) => {
  useEffect(()=>{
    setTasks(taskList.filter((task) => task.Sprint === props.selectedSprint));
  },[props.selectedSprint]);

  const [taskList, SetTaskList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const _taskList = await getMessage('task/getAllTasks');
        SetTaskList(_taskList);
        console.log("taskList:", taskList);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
     setIsOpen(false);
  };

  const task = {
    Priority: "red",
    Assignee: "Bar",
    Description: "description",
    Status: "TO DO",
    Nick: "GAN", 
    Title: "Add modal",
    TaskNum: 1,
  }

  const meet = {
    Title: "Stand up",
    Date: "10/6/23",
    Hour: "14:30",
  }

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
      <div style={{ display: 'flex' }}>
        
        <BarContainer>
        <TitleMid>upcoming tasks...</TitleMid>
        <TaskMini
                    color={task.Priority}
                    assignee={task.Assignee}
                    description={task.Description}
                    status={task.Status}
                    nick={task.Nick}
                    title={task.Title}
                    taskNum={task.TaskNum}
                    project={props.project}
                  />
                  <TaskMini
                    color={task.Priority}
                    assignee={task.Assignee}
                    description={task.Description}
                    status={task.Status}
                    nick={task.Nick}
                    title={task.Title}
                    taskNum={task.TaskNum}
                    project={props.project}
                  />
                  <TaskMini
                    color={task.Priority}
                    assignee={task.Assignee}
                    description={task.Description}
                    status={task.Status}
                    nick={task.Nick}
                    title={task.Title}
                    taskNum={task.TaskNum}
                    project={props.project}
                  />
                  <TaskMini
                    color={task.Priority}
                    assignee={task.Assignee}
                    description={task.Description}
                    status={task.Status}
                    nick={task.Nick}
                    title={task.Title}
                    taskNum={task.TaskNum}
                    project={props.project}
                  />
        </BarContainer>

        <BarContainer>
        <TitleMid>upcoming meetings...</TitleMid>
        <MeetMini
          title={meet.Title}
          date={meet.Date}
          hour={meet.Hour}
                  />

<MeetMini
          title={meet.Title}
          date={meet.Date}
          hour={meet.Hour}
                  />
                  <MeetMini
          title={meet.Title}
          date={meet.Date}
          hour={meet.Hour}
                  />
        </BarContainer>

        <BarContainer>
        <TitleMid>notifications...</TitleMid>
        </BarContainer>
        
        </div>
      </TaskContainer>
    </MainContainer>
  );
        } else {
          if (props.isStart) {
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
              </SearchContainer>
              <TaskContainer>
                {tasks.map((task) => (
                  <Task
                    color={task.Priority}
                    assignee={task.Assignee}
                    description={task.Description}
                    status={task.Status}
                    nick={task.Nick}
                    title={task.Title}
                    taskNum={task.TaskNum}
                    project={props.project}
                  />
                ))}
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
                        <CreateTaskButton onClick={toggleModal}>
                          <Image
                            src="./Plus.svg"
                            width={15}
                            height={15}
                            style={{ marginTop: "4%", marginLeft: "4%" }}
                          />
                          <ButtonTitle>Create Task</ButtonTitle>
                          <CreateTaskModal
                          isOpen={isOpen}
                          closeModal={closeModal}
                          taskList={tasks}
                          description={props.description}
                          priority={props.color}
                          sprint={props.selectedSprint}
                        />
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
                            title={task.Title}
                            taskNum={task.TaskNum}
                            project={props.project}
                          />
                        ))}
                      </TaskContainer>
                      <CreateSprintButton>
                          <Image
                            src="./Plus.svg"
                            width={15}
                            height={15}
                            style={{ marginTop: "4%", marginLeft: "4%" }}
                          />
                          <ButtonTitle>Start Sprint</ButtonTitle>
                        </CreateSprintButton>
                                            </MainContainer>
                    
                  );
                }
        };
        }


export default Tasks;
