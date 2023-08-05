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
import Comments from "../TaskModal/Comments";
import { touchRippleClasses } from "@mui/material";
import TaskModal from "../TaskModal/TaskModal";

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

  return (
    <div>
      <TaskContainer onClick={toggleModal}>
        <Priority color={props.color} />
        <Title>TAS - 1</Title>
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
          onClick={() => {
            console.log("delete");
          }}
        />
      </TaskContainer>
      <TaskModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        description={props.description}
        priority={props.color}
        task={props.task}
      />
    </div>
  );
};

export default Task;
