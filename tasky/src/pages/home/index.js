import React, { useState } from "react";
import { RecentProjectsContainer, TitleContainer } from "./styles";
import ProjectCard from "../../components/ProjectCard/projectCard";
import NewProjectCard from "../../components/ProjectCard/newProjectCard";
import CreateProjectModal from "../../components/ProjectModal/projectModal";

const HomePage = () => {

  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };


  return (

    <div style={{ paddingTop: 20 }}>
      <TitleContainer>
        <h1>Your recent projects</h1>
      </TitleContainer>
      <RecentProjectsContainer>
        <NewProjectCard setOpen={toggleModal}/>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </RecentProjectsContainer>
      <CreateProjectModal isOpen={isOpen} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomePage;
