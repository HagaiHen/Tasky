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
import ErrorModal from "../ErrorModal/ErrorModal";

const SideBar = (props) => {
  const [click, onClick] = useState(true);
  const [sprints, setSprints] = useState();
  const [isError, setIsError] = useState(false); //bool for error actions.


  const [isOpen, setIsOpen] = useState(false);
  
  const toggleModal = () => {
    if(props.project == null){setIsError(!isError);}
    else{setIsOpen(!isOpen);}
  };

  useEffect(() => {
    const getSprints = async () => {
      if (!props.project) {
        return;
      }
      const sprints = await getAllSprints(props.project.projectId);
      let sprintTests = sprints?.map((sprint) => ({
        project: props.project.name,
        sprintNum: sprint.sprintNumber,
        start: sprint.startDate,
        end: sprint.endDate,
        open: sprint.sprintNumber === 0,
        id: sprint.sprintId,
        isBacklog: sprint.sprintNumber === 0,
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

  const error_createSprintWithoutProject = "[Warning] You cant create a new Sprint before open / link a new Project, please select a project and try again."; 

  return (
    <div>
      <SideContainer className={props.classNameSPRT}>
        <ErrorModal
          isOpen={isError}
          setError={setIsError}
          errorMessage={error_createSprintWithoutProject}
        />
        <SprintHeaderContainer>
          <Title>Sprints</Title>
          <CreateSprintButton onClick={toggleModal}>
            <Image src="./Plus.svg" width={15} height={15} />
            <ButtonTitle className={props.classNameCRT}>Create Sprint</ButtonTitle>
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
        <CreateSprintModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          setProject={props.setProject}
          project={props.project}
          setSprints={setSprints}
          sprints={sprints}
        />
      </SideContainer>
    </div>
  );
};

export default SideBar;
