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

export default function CreateProjectModal(props) {
  const [project, setproject] = useState(new Project());
  const [approveColor, setApproveColor] = useState("red");

  return (
    <CreateProjectModalStyled isOpen={props.isOpen}>
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
                }
                else {
                  setApproveColor("red");
                }
              }}
              isProject={true}
            />
          </TitleInputContainer>
          <ContactsContextProvider>
          <ContactMultiSelect />
          </ContactsContextProvider>
          <div style={{ display: "flex", flexDirection: "row", marginTop: '6rem' }}>
            <SaveProjectButton
              color={approveColor}
              onClick={props.toggleModal} // TODO: save project
            >
              <ButtonTitle>SAVE PROJECT</ButtonTitle>
            </SaveProjectButton>
          </div>
        </TaskInfoContainer>
      </DataContainer>
    </CreateProjectModalStyled>
  );
}
