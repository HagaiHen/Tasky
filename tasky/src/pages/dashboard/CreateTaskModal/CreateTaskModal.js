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
      onBackgroundClick={props.closeModal}
      onEscapeKeydown={props.closeModal}
    >
      <CloseContainer>
        <Image
          src={"./Close.svg"}
          width={30}
          height={30}
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => {
            props.closeModal();
          }}
        />
      </CloseContainer>
      <DataContainer>
        <TaskInfoContainer>
          <TitleContainer>
            <Priority color={props.priority} />
            <Title>TAS - 1</Title>
          </TitleContainer>
          <Description>Description</Description>
          <DescriptionInput description={props.description} />
        </TaskInfoContainer>
        <TaskParamsContainer></TaskParamsContainer>
      </DataContainer>
    </TaskModalStyled>
  );
};

export default TaskModal;
