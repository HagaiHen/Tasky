import React, { useState } from "react";
import { RecentProjectsContainer, TitleContainer, Title, ContactContainer, VectorContainer } from "./styles";
import ProjectCard from "../../components/ProjectCard/projectCard";
import NewProjectCard from "../../components/ProjectCard/newProjectCard";
import { getAllProjectsByUserId } from "../../controller/ProjectController";
import CreateProjectModal from "../../components/ProjectModal/projectModal";
import ContactsList from "../../components/ContactListSearch/index" 
import Joyride from "react-joyride";

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

  const hideProject = (projectId) => {
    setProjects(projects.filter((project) => project.projectId !== projectId));
  };

  const [steps] = useState([
    {
      target: ".start-component",
      content:
        "Welcome to your Home Page! This is your starting point to the app. you want to create / delete  and mennage your project? No problem! you can do it all from here!",
      title: "This title is pretty self explained, don't you think?",
    },
    {
      target: ".createProject-component",
      content:
        "Here In this create bottom you will be able to ... CREATE BOTTOM! Let's put the joke aside, by clicking on the above button the project creation window will open for you - you will choose a name for the project, you will be able to associate employees with it and many other spectacular options... try me!",
      title: "Let's Create a Project!",
    },
    {
      target: ".existingProjects-component",
      content: "You want to mennage them.. Go ahead! it is all yours!",
      title: "Existing projects!",
    },
  ]);

  return (
    <div style={{
      paddingTop: 20,
    }}>
      {props.isOnboarding && (
        <Joyride
          steps={steps}
          continuous={true}
          showProgress={true}
          showSkipButton={true}
        />
      )}
      <CreateProjectModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        user={props.user}
      />
      <TitleContainer className="start-component">
        <Title>Recent projects</Title>
      </TitleContainer>
      <RecentProjectsContainer>
        <NewProjectCard
          classNameCRT="createProject-component"
          setOpen={toggleModal}
        />
        {projects.length > 0 ? projects.map((project) => (
          <ProjectCard
            className="existingProjects-component"
            key={project.projectId}
            project={project}
            setBacklogProject={props.setBacklogProject}
            handleNav={props.handleNav}
            hideProject={hideProject}
          />
        )) : <div/>}
      </RecentProjectsContainer>
      <TitleContainer className="start-component">
        <Title>Contacts</Title>
      </TitleContainer>
      <div style={{height: 20}}/>
      <ContactContainer>
      <ContactsList uid={props.user.uid}/>
      </ContactContainer>
    </div>
  );
};
export default HomePage;
