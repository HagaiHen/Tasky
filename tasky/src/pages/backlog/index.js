import React, { useState, useEffect } from "react";
import { ContentContainer } from "./styles";
import Joyride from 'react-joyride';
import SideBar from "@/components/SideBar/SideBar";
import Tasks from "@/components/Tasks/Tasks";
import { getAllProjectsByUserId } from "@/controller/ProjectController";

const Backlog = (props) => {
  console.log("uid", props.user.uid);
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

  const [steps] = useState([
    {
      target: ".selectProject-component", 
      content: "When you first get into Backlog, you MUST choose the Project you are working on! it's a big key in the app flow so othe options like 'create Task' or 'create Sprint' are not aviliable as long as there is no selected project!",
      title:"Select A Project!"
    },
    {
      target: ".sprint-component", 
      content: "Now, after you picked a project, a new sprints related to this project will be avilable to you, each one of them has it's own tasks.",
      title:"Select Your Sprint!"
    },
    {
      target: ".createSprint-component", 
      content: "No problem! Here you can create a new sprint that will be directly linked to your project!",
      title:"Need more sprints?"
    },
    {
      target: ".tasks-component", 
      content: "Here all the task related to this current sprint will be, you will be able to edit, update and delete each one of them.",
      title:"Task Hub"
    },
    {
      target: ".creatTasks-component", 
      content: "Here all the tasks are created ... imagin a new task baby in the world that you create with your on hands and will!",
      title:"let there be Task"
    },
    {
      target: ".myTasks-component", 
      content: "No worry, By pressing this botton you will see only the tasks related to you (in the current sprint scope).",
      title:"So you are greedy about your Tasks??"
    },
  ]);

  return (
    <ContentContainer>
      {props.isOnboarding && (
          <Joyride
            steps={steps}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
          />
        )}
      <SideBar 
        selectSprint={renderSelectedSprint} 
        project={selectedProject} 
        setProject={setSelectedProject} 
        classNameSPRT="sprint-component"
        classNameCRT="createSprint-component"
        />
      <Tasks
        selectedSprint={selectedSprint}
        projects={userProjects}
        project={selectedProject}
        onSelectProject={onSelectProject}
        user={props.user}
        className1="selectProject-component"
        classNameTASK="tasks-component"
        classNameCRTTSK="creatTasks-component"
        classNameMYTSK="myTasks-component"
      />
    </ContentContainer>
  );
};

export default Backlog;
