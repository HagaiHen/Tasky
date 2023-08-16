import React, { useState } from "react";
import {
  CloseContainer,
  DataContainer,
  Title,
  TitleContainer,
  TitleInputContainer,
  SaveProjectButton,
  ButtonTitle,
  CreateProjectModalStyled,
  Priority,
} from "../ProjectModal/styles";
import Image from "next/image";
import DatePicker from "react-datepicker"; // Import date picker component
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles

export default function CreateSprintModal(props) {
  const isOpen = props.isOpen;
  const [startDate, setStartDate] = useState(new Date());
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [approveColor, setApproveColor] = useState("red");

  const saveSprintHandler = () => {
    if (startDate && estimatedTime > 0) {
      // TODO: Save sprint to DB and take appropriate action
      props.toggleModal();
    } else {
      alert("Please enter a valid start date and estimated time.");
    }
  };

  return (
    <CreateProjectModalStyled isOpen={isOpen}>
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
        <TitleContainer>
          <Priority color="green" />
          <Title>Create Sprint</Title>
        </TitleContainer>
        <TitleContainer>
          <Title>Start Date</Title>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setApproveColor("green");
            }}
          />
        </TitleContainer>
        <TitleInputContainer>
          <Title>Estimated Time (days)</Title>
          <input
            type="number"
            value={estimatedTime}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setEstimatedTime(value);
              if (value > 0) {
                setApproveColor("green");
              } else {
                setApproveColor("red");
              }
            }}
          />
        </TitleInputContainer>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "6rem" }}
        >
          <SaveProjectButton color={approveColor} onClick={saveSprintHandler}>
            <ButtonTitle>SAVE SPRINT</ButtonTitle>
          </SaveProjectButton>
        </div>
      </DataContainer>
    </CreateProjectModalStyled>
  );
}
