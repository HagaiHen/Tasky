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
import DescriptionInput from '../DescriptionInput/DescriptionInput'
import Comments from './Comments'
import DropDownMenu from "../DropDownMenu/dropDownMenu";
const TaskModal = (props) => {
  return (
    <TaskModalStyled isOpen={props.isOpen}>
      <CloseContainer>
        <Image
          src={"./Close.svg"}
          width={30}
          height={30}
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={props.toggleModal}
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
          <div style={{ overflow: "auto", height: "350px", width: "100%" }}>
            <Comments />
          </div>
        </TaskInfoContainer>
        <TaskParamsContainer>
          <div>
            <Description>Assignee</Description>
            <DropDownMenu selected="Bar Goldenberg" />
          </div>
          <div>
            <Description>Assignee</Description>
            <DropDownMenu selected="Bar Goldenberg" />
          </div>
          <div>
            <Description>Assignee</Description>
            <DropDownMenu selected="Bar Goldenberg" />
          </div>
          <div>
            <Description>Assignee</Description>
            <DropDownMenu selected="Bar Goldenberg" />
          </div>
          
          {/* <DropDownMenu selected="Bar Goldenberg" /> */}
        </TaskParamsContainer>
      </DataContainer>
    </TaskModalStyled>
  );
};

export default TaskModal;
