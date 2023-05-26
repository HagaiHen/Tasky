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
  ParamContainer,
  ParamTitle,
  ParamLine,
  DescriptionContainer,
  ProgressTitle,
  ProgressContainer
} from "./styles";
import Image from "next/image";
import DescriptionInput from '../DescriptionInput/DescriptionInput'
import TitleInput from '../DescriptionInput/TitleInput'
import Comments from './Comments'
import DropDownMenu from "../DropDownMenu/dropDownMenu";
import MultiDropDown from "../DropDownMenu/multiDropDown";
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
          <DescriptionContainer color={props.priority}>
            <Description>TITLE</Description>
          </DescriptionContainer>
          <TitleInput title="This is the tasks title" />
          <DescriptionContainer color={props.priority}>
            <Description>DESCRIPTION</Description>
          </DescriptionContainer>
          <DescriptionInput description={props.description} />
          <div style={{ overflow: "auto", height: "350px", width: "100%" }}>
            <Comments />
          </div>
        </TaskInfoContainer>
        <TaskParamsContainer>
          <ProgressContainer color={props.priority}>
            <ProgressTitle>PROGRESS</ProgressTitle>
            <ParamLine color={props.priority} />
            <DropDownMenu />
          </ProgressContainer>
          <ParamContainer color={props.priority}>
            <ProgressTitle>PARAMETERS</ProgressTitle>
            <ParamLine color={props.priority} />
            <div style={{ overflow: "auto" }}>
              <MultiDropDown title="Dependencies" />
              <DropDownMenu title="Assignee" />
              <DropDownMenu title="Urgency" />
              <DropDownMenu title="Buisness value" />
              <DropDownMenu title="Dev effort" />
              <DropDownMenu title="Risk Reduction" />
            </div>
          </ParamContainer>
        </TaskParamsContainer>
      </DataContainer>
    </TaskModalStyled>
  );
};

export default TaskModal;
