import React, { useState, useEffect } from "react";
import { Container, ContentContainer } from "./styles";
import Header from "../../components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import Tasks from "@/components/Tasks/Tasks";
import { getAllProjectsByUserId } from "@/controller/ProjectController";
import { ModalProvider } from "styled-react-modal";
const Backlog = (props) => {
  const [selectedSprint, setSelectedSprint] = useState("lUcZmmWjS2BfFTgvsxWF");
  const [selectedProject, setSelectedProject] = useState(null);
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      console.log('userId', props.user.uid);
      const projects = await getAllProjectsByUserId(props.user.uid);
      console.log('projects', projects)
      setUserProjects(projects);
    };
    getProjects();
  }, []);

  const onSelectProject = (project) => {
    setSelectedProject(project);
    setSelectedSprint(project.backlogId);
  };

  const renderSelectedSprint = (sprint) => {
    setSelectedSprint(sprint);
  };

  return (
    <ContentContainer>
      <SideBar selectSprint={renderSelectedSprint} project={selectedProject}/>
      <Tasks
        selectedSprint={selectedSprint}
        projects={userProjects}
        project={selectedProject}
        onSelectProject={onSelectProject}
      />
    </ContentContainer>
  );
};

export default Backlog;
