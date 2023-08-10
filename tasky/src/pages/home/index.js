import React, { useState } from "react";
import { RecentProjectsContainer, TitleContainer } from "./styles";
import ProjectCard from "../../components/ProjectCard/projectCard";
import NewProjectCard from "../../components/ProjectCard/newProjectCard";

const HomePage = () => {
  return (
    <div style={{ paddingTop: 20 }}>
      <TitleContainer>
        <h1>Your recent projects</h1>
      </TitleContainer>
      <RecentProjectsContainer>
        <NewProjectCard />
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
    </div>
  );
};

export default HomePage;
