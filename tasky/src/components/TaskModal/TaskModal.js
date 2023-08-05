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
import { createTask, getAllTasks } from "@/controller/TaskController";
import { getAllSprints } from "@/controller/SprintController";
const TaskModal = (props) => {
  const [params, setParams] = useState({});
  const [nextTaskNum, setNextTaskNum] = useState(0);
  // useEffect(() => {
  //   const getNextTaskNum = async () => {
  //     const sprints = await getAllSprints(0);
  //     sprints.forEach(async (sprint) => {
  //       const tasks = await getAllTasks(sprint.sprintId);
  //       setNextTaskNum(nextTaskNum+tasks.length);
  //     });
  //   };
    
  //   getNextTaskNum();
  // }, []);
  const onCreateTask = async () => {
    console.log('params', params);
    await createTask({ sprint: 'lUcZmmWjS2BfFTgvsxWF', ...params });
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
                title="Dependencies"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, assignee: option.label });
                }}
                title="Assignee"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, urgency: option.value });
                }}
                title="Urgency"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, buisnessValue: option.value });
                }}
                title="Buisness value"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, devEffort: option.value });
                }}
                title="Dev effort"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, riskReduction: option.value });
                }}
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
