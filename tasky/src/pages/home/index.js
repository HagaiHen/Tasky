import React, { useState } from "react";
import { RecentProjectsContainer, TitleContainer } from "./styles";
import ProjectCard from "../../components/ProjectCard/projectCard";
import NewProjectCard from "../../components/ProjectCard/newProjectCard";
import { getAllProjectsByUserId } from "../../controller/ProjectController";
import CreateProjectModal from "../../components/ProjectModal/projectModal";

const HomePage = (props) => {

  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  const [projects, setProjects] = useState([]);
  
  React.useEffect(() => {
    getAllProjectsByUserId(props.user.uid).then((projects) => {
      setProjects(projects);
    });
  }, [isOpen]);

  return (
    <div style={{ paddingTop: 20 }}>
      <CreateProjectModal isOpen={isOpen} toggleModal={toggleModal} user={props.user}/>
      <TitleContainer>
        <h1>Your recent projects</h1>
      </TitleContainer>
      <RecentProjectsContainer>
        <NewProjectCard setOpen={toggleModal}/>
        {projects.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </RecentProjectsContainer>
    </div>
  );
};

export default HomePage;
