import React, { useState } from "react";
import { RecentProjectsContainer, TitleContainer } from "./styles";
import ProjectCard from "../../components/ProjectCard/projectCard";

const HomePage = () => {
  return (
    <div style={{ paddingTop: 20 }}>
      {/* recent project title */}
      <TitleContainer>
        <h1>Your recent projects</h1>
      </TitleContainer>
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
