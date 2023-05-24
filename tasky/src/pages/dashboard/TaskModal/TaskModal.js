import React, { useState } from "react";
import {
  Title,
  TaskModalStyled,
  TaskInfoContainer,
  TaskParamsContainer,
  CloseContainer,
  DataContainer,
  TitleContainer,
  Priority,
  Description,
} from "./styles";
import Image from "next/image";
import DescriptionInput from '../../../components/DescriptionInput/DescriptionInput'
import Comments from './Comments'
const TaskModal = (props) => {
  return (
    <TaskModalStyled
      isOpen={props.isOpen}
    >
      <CloseContainer>
        <Image
          src={"./Close.svg"}
          width={30}
          height={30}
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={props.closeModal}
        />
      </CloseContainer>
      <DataContainer>
        <TaskInfoContainer>
          <TitleContainer>
            <Priority color={props.priority} />
            <Title>{props.project}-{props.taskNum}: {props.title}</Title>
          </TitleContainer>
          {/* <Description>Description</Description> */}
          <DescriptionInput description={props.description} />
          <div style={{overflow: 'auto', height: '350px', width: '100%'}}>
            <Comments />
          </div>
        </TaskInfoContainer>
        <TaskParamsContainer></TaskParamsContainer>
      </DataContainer>
    </TaskModalStyled>
  );
};

export default TaskModal;
