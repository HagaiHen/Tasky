import React from "react";
import { useState } from "react";
import {
  Title,
  TaskInfoContainer,
  CloseContainer,
  DataContainer,
  TitleContainer,
  Priority,
  SaveProjectButton,
  ButtonTitle,
  CreateProjectModalStyled,
  TitleInputContainer,
} from "./styles";
import Image from "next/image";
import TitleInput from "../DescriptionInput/TitleInput";
import Project from "../../model/project";
import ContactMultiSelect from "../ContactListSearch/ContactMultiSelect";
import { ContactsContextProvider } from "../ContactListSearch/ContactsContext";
import {
  addUsersToProject,
  createProject,
} from "../../controller/ProjectController";

export default function CreateProjectModal(props) {
  const isOpen = props.isOpen;
  const [project, setproject] = useState(new Project());
  const [approveColor, setApproveColor] = useState("red");
  const [selectedTeam, setselectedTeam] = useState([]);

  const saveProjectHandler = async () => {
    if (project.name.length > 0) {
      project.teamLeaderUid = props.user.uid;
      const projectId = await createProject(project);
      project.projectId = projectId;
      await addUsersToProject(project.projectId, selectedTeam);
      props.toggleModal();
    } else {
      alert("You have to enter a project name");
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
        <TaskInfoContainer>
          <TitleContainer>
            <Priority color={props.priority} />
            <Title>Project Name</Title>
          </TitleContainer>
          <TitleInputContainer>
            <TitleInput
              title={project.name}
              onInput={(e) => {
                project.name = e.target.value;
                setproject(project);
                if (project.name.length > 0) {
                  setApproveColor("green");
                } else {
                  setApproveColor("red");
                }
              }}
              isProject={true}
            />
          </TitleInputContainer>
          <ContactsContextProvider myuid={props.user.uid}>
            <ContactMultiSelect
              selectedValues={selectedTeam}
              setSelectedValues={setselectedTeam}
            />
          </ContactsContextProvider>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "6rem" }}
          >
            <SaveProjectButton
              color={approveColor}
              onClick={saveProjectHandler} // TODO: save project
            >
              <ButtonTitle>SAVE PROJECT</ButtonTitle>
            </SaveProjectButton>
          </div>
        </TaskInfoContainer>
      </DataContainer>
    </CreateProjectModalStyled>
  );
}
