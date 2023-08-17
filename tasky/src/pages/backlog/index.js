import React, { useState, useEffect } from "react";
import { Container, ContentContainer } from "./styles";
import Header from "../../components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import Tasks from "@/components/Tasks/Tasks";
import { getAllProjectsByUserId } from "@/controller/ProjectController";

const Backlog = (props) => {
  const [selectedSprint, setSelectedSprint] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await getAllProjectsByUserId(props.user.uid);
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
      <SideBar selectSprint={renderSelectedSprint} project={selectedProject} setProject={setSelectedProject} />
      <Tasks
        selectedSprint={selectedSprint}
        projects={userProjects}
        project={selectedProject}
        onSelectProject={onSelectProject}
        user={props.user}
      />
    </ContentContainer>
  );
};

export default Backlog;
