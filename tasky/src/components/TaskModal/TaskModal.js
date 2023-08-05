import React, { useState, useEffect } from "react";
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
  ProgressContainer,
  SaveTaskButton,
  ButtonTitle,
} from "./styles";
import Image from "next/image";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
import TitleInput from "../DescriptionInput/TitleInput";
import Comments from "./Comments";
import DropDownMenu from "../DropDownMenu/dropDownMenu";
import MultiDropDown from "../DropDownMenu/multiDropDown";
import { createTask } from "@/controller/TaskController";
import Task from "@/model/task";
const TaskModal = (props) => {
  const [params, setParams] = useState(
    props.task
      ? props.task.toJSON()
      : new Task("", "", "", "", "", "", "", "", 0, 0, 0, 0).toJSON()
  );
  const [nextTaskNum, setNextTaskNum] = useState(0);

  const onCreateTask = async () => {
    const task = Task.fromJSON({ sprintId: "lUcZmmWjS2BfFTgvsxWF", ...params });
    await createTask(task);
    props.toggleModal();
  };
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
            <Title>{`TAS - ${nextTaskNum + 1}`}</Title>
          </TitleContainer>
          <DescriptionContainer color={props.priority}>
            <Description>TITLE</Description>
          </DescriptionContainer>
          <TitleInput
            title={props.title}
            onInput={(e) => {
              setParams({ ...params, title: e.target.value });
            }}
          />
          <DescriptionContainer color={props.priority}>
            <Description>DESCRIPTION</Description>
          </DescriptionContainer>
          <DescriptionInput
            description={props.description}
            onInput={(e) => {
              setParams({ ...params, description: e.target.value });
            }}
          />
          <div style={{ overflow: "auto", height: "350px", width: "100%" }}>
            <Comments />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SaveTaskButton color={props.priority} onClick={onCreateTask}>
              <ButtonTitle>SAVE TASK</ButtonTitle>
            </SaveTaskButton>
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
              <MultiDropDown
                onChange={(options) => {
                  setParams({ ...params, dependencies: options });
                }}
                defaultValue={params.dependencies}
                title="Dependencies"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, assignee: option.label });
                }}
                defaultValue={params.assignee}
                title="Assignee"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, urgency: option.value });
                }}
                defaultValue={params.urgency}
                title="Urgency"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, buisnessValue: option.value });
                }}
                defaultValue={params.buisnessValue}
                title="Buisness value"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, devEffort: option.value });
                }}
                defaultValue={params.devEffort}
                title="Dev effort"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, riskReduction: option.value });
                }}
                defaultValue={params.riskReduction}
                title="Risk Reduction"
              />
            </div>
          </ParamContainer>
        </TaskParamsContainer>
      </DataContainer>
    </TaskModalStyled>
  );
};

export default TaskModal;
