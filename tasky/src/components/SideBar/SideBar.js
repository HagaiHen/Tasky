import React, { useEffect, useState } from "react";
import DataCard from "../DataCard/DataCard";
import {
  SideContainer,
  Title,
  CreateSprintButton,
  SprintHeaderContainer,
  ButtonTitle,
} from "./styles";
import { getAllSprints } from "@/controller/SprintController";
import Image from "next/image";
import CreateSprintModal from "../SprintModal/index";

const SideBar = (props) => {
  const [click, onClick] = useState(true);
  const [sprints, setSprints] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getSprints = async () => {
      if (!props.project) {
        return;
      }
      const sprints = await getAllSprints(props.project.projectId);
      let sprintTests = sprints?.map((sprint) => ({
        project: props.project.name,
        sprintNum: sprint.sprintNum,
        start: sprint.startDate,
        end: sprint.endDate,
        team: sprint.sprintTeam,
        open: sprint.sprintNum === 0,
        id: sprint.sprintId,
        isBacklog: sprint.sprintNum === 0,
      }));
      setSprints(sprintTests.sort((a, b) => a.sprintNum - b.sprintNum));
    };
    getSprints();
  }, [props.project]);

  const sprintClicked = (sprintNum) => {
    props.selectSprint(sprintNum);
    sprints.forEach((sprint) => {
      console.log("SprintNum", sprint.id);
      if (sprint.id === sprintNum) {
        sprint.open = true;
      } else {
        sprint.open = false;
      }
    });
    onClick(!click);
  };
  return (
    <div>
      <SideContainer>
        <SprintHeaderContainer>
          <Title>Sprints</Title>
          <CreateSprintButton onClick={toggleModal}>
            <Image src="./Plus.svg" width={15} height={15} />
            <ButtonTitle>Create Sprint</ButtonTitle>
          </CreateSprintButton>
        </SprintHeaderContainer>
        {sprints?.map((sprint) => (
          <DataCard
            project={sprint.project}
            sprint={sprint.sprintNum}
            start={sprint.start}
            end={sprint.end}
            open={sprint.open}
            onClick={sprintClicked}
            isBacklog={sprint.isBacklog}
            key={sprint.id}
            sprintId={sprint.id}
          />
        ))}
        <CreateSprintModal isOpen={isOpen} toggleModal={toggleModal} />
      </SideContainer>
    </div>
  );
};

export default SideBar;
