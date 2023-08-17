import React, { useState } from "react";
import {
  CloseContainer,
  TitleInputContainer,
  ButtonTitle,
  Priority,
  Title,
} from "../ProjectModal/styles";
import Image from "next/image";
import DatePicker from "react-datepicker"; // Import date picker component
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import {
  CreateSprintModalStyled,
  ModalContainer,
  TitleContainer,
  SaveSprintButton,
  MinorTitle,
} from "./styles";
import Sprint from "../../model/sprint";
import { createSprint } from "../../controller/SprintController";
import { updateProject } from "../../controller/ProjectController";
import { format } from "date-fns"; // Import the format function

export default function CreateSprintModal(props) {
  const isOpen = props.isOpen;
  const [startDate, setStartDate] = useState(new Date());
  const [estimatedTime, setEstimatedTime] = useState(0);

  const saveSprintHandler = async () => {
    if (startDate != null && estimatedTime >= 0) {
      props.project.sprintNum = props.project.sprintNum + 1;
      
      const formattedStartDate = format(startDate, "MMMM d, yyyy");
      const formattedEndDate = format(new Date(startDate.getTime() + estimatedTime * 86400000), "MMMM d, yyyy");

      const sprint = new Sprint(
        '',
        formattedStartDate,
        formattedEndDate,
        props.project.projectId,
        props.project.sprintNum
      );

      console.log("Sprint", sprint.toJSON());

      const sprintId = await createSprint(sprint);
      sprint.sprintId = sprintId;
      await updateProject(props.project);
      props.setProject(props.project);

      const sprintdata = {
        project: props.project.name,
        sprintNum: sprint.sprintNumber,
        start: sprint.startDate,
        end: sprint.endDate,
        open: false,
        id: sprint.sprintId,
        isBacklog: false,
      };
      props.setSprints([...props.sprints, sprintdata]);

      props.toggleModal();
    } else {
      alert("Please enter a valid start date and estimated time.");
    }
  };

  return (
    <CreateSprintModalStyled isOpen={isOpen}>
      <CloseContainer>
        <Image
          src={"./Close.svg"}
          width={30}
          height={30}
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={props.toggleModal}
        />
      </CloseContainer>
      <ModalContainer>
        <TitleContainer>
          <Priority color="green" />
          <Title>Create Sprint</Title>
        </TitleContainer>
        <TitleInputContainer>
          <MinorTitle>Start Date</MinorTitle>
          <DatePicker
            selected={startDate}
            weekLabel="Choose a date"
            onChange={(date) => {
              console.log("date", date);
              if (date == null || date == undefined) {
                alert("Please enter a valid start date.");
              } else {
                setStartDate(date);
              }
            }}
          />
        </TitleInputContainer>
        <TitleInputContainer>
          <MinorTitle>Estimated Time (days)</MinorTitle>
          <input
            type="number"
            value={estimatedTime}
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Please enter a valid estimated time.");
                return;
              }
              setEstimatedTime(e.target.value);
            }}
          />
        </TitleInputContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "6rem",
            marginLeft: "40px",
          }}
        >
          <SaveSprintButton color={"green"} onClick={saveSprintHandler}>
            <ButtonTitle>SAVE SPRINT</ButtonTitle>
          </SaveSprintButton>
        </div>
      </ModalContainer>
    </CreateSprintModalStyled>
  );
}
