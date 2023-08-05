import React, { useState } from "react";
import { RecentProjectsContainer } from "./styles";
import ProjectCard from "../../components/ProjectCard/projectCard";
import { MainContainer } from "../../components/Tasks/styles";

const HomePage = () => {
  return (
    <div style={{ paddingTop: 20 }}>
      <RecentProjectsContainer>
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
