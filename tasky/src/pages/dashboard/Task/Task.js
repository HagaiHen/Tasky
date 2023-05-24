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
import Comments from "../../../components/TaskModal/Comments";
import { touchRippleClasses } from "@mui/material";
import TaskModal from "../TaskModal/TaskModal";

const Task = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
     setIsOpen(false);
  };

  const formatDescription = (desc) => {
    if (desc.length > 20) {
      return desc.substring(0, 17) + "...";
    }
    return desc;
  };
  return (
    <TaskContainer onClick={toggleModal}>
      <Priority color={props.color} />
      <Title>{props.project} - {props.taskNum}</Title>
      <DescriptionContainer>
        <Description size={props.title.length}>
          {formatDescription(props.title)}
        </Description>
      </DescriptionContainer>
      <Spacer />
      <Title>Status: </Title>
      <Selected>
        <StatusText>{props.status}</StatusText>
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
        onClick={() => {
          console.log("delete");
        }}
      />
      <TaskModal
        isOpen={isOpen}
        closeModal={closeModal}
        description={props.description}
        priority={props.color}
        title={props.title}
        taskNum={props.taskNum}
        project={props.project}
      />
    </TaskContainer>
  );
};

export default Task;
