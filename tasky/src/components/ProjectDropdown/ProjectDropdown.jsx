// components/ProjectDropdown.js
import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
  margin-right: 10px;
`;

const DropdownHeader = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
`;

const StyledText = styled.text`
  font-family: sans-serif; 
  font-weight: 400;
  color: white;
`

const DropdownListContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #585858;
  z-index: 1;
  border-radius: 10px;
  max-height: 300px;
  overflow-x: scroll;
`;

const DropdownListItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #8c8c8c;
  }
  text-align: center;
`;

function ProjectDropdown({ projects, onSelect ,className, project}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setIsOpen(false);
    onSelect(project);
  };

  if (project && project !== selectedProject) {
    handleSelect(project);
  }

  return (
    <DropdownContainer className={className}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <StyledText>
          {selectedProject ? selectedProject.name : "Select a project"}
        </StyledText>
      </DropdownHeader>

      {isOpen && (
        <DropdownListContainer>
          {projects.map(project => (
            <DropdownListItem key={project.projectId} onClick={() => handleSelect(project)}>
              <StyledText>
               {project.name}
              </StyledText>
            </DropdownListItem>
          ))}
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
}

export default ProjectDropdown;
