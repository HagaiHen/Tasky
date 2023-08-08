import React, { useState } from "react";
import {
  TaskContainer,
  Priority,
  Title,
  Description,
  Spacer,
  StatusText,
  Selected,
  DescriptionContainer,
} from "./styles";
import Image from "next/image";
import TaskModal from "../TaskModal/TaskModal";
import { deleteTask } from "@/controller/TaskController";

const Task = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log("in toggle Modal");
  };

  const formatDescription = (desc) => {
    if (desc?.length > 20) {
      return desc?.substring(0, 17) + "...";
    }
    return desc;
  };

  const updateTasks = () => {
    props.rerenderTasks();
  }

  return (
    <div>
      <TaskContainer onClick={toggleModal}>
        <Priority color={props.color} />
        <Title>
          {props.project?.name} - {props.task.taskNum}
        </Title>
        <DescriptionContainer>
          <Description size={props.title?.length}>
            {formatDescription(props.title)}
          </Description>
        </DescriptionContainer>
        <Spacer />
        <Title>Status: </Title>
        <Selected>
          <StatusText>{"IN PROGRESS"}</StatusText>
        </Selected>
        <Spacer />
        <Title>Assignee: </Title>
        <Selected>
          <StatusText>{props.assignee}</StatusText>
        </Selected>
        <Spacer />
        <Image
          src={"./Trash.svg"}
          width={20}
          height={20}
          style={{ alignSelf: "center", marginLeft: "33px" }}
          onClick={async (e) => {
            e.preventDefault();
            e.stopPropagation();
            await deleteTask(props.task.taskId);
            props.rerenderTasks();
          }}
        />
      </TaskContainer>
      <TaskModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        description={props.description}
        priority={props.color}
        task={props.task}
        updateTasks={updateTasks}
        project={props.project}
        updateProject={props.updateProject}
      />
    </div>
  );
};

export default Task;
