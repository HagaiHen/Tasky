import React, { useEffect, useState } from "react";
import DataCard from "../DataCard/DataCard";
import { SideContainer, Title } from "./styles";
const sprints = [
  {
    project: "TAS",
    sprintNum: -1,
    start: "--",
    end: "--",
    open: true,
    isBacklog: true,
    isStart: false
  },
  {
    project: "GAN",
    sprintNum: 8,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
    isStart: false
  },
  {
    project: "CI/CD",
    sprintNum: 3,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
    isStart: true
  },
  {
    project: "Embedded",
    sprintNum: 9,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
    isStart: true
  }
];
const SideBar = (props) => {
  const [click, onClick] = useState(true);
  const sprintClicked = (sprintNum) => {
    props.selectSprint(sprintNum);
    sprints.forEach((sprint)=>{
        if(sprint.sprintNum === sprintNum){
            sprint.open=true;
            props.isStart(sprint.isStart);
            props.project(sprint.project);
            console.log(sprint.sprintNum, sprintNum);
        }else{
            sprint.open=false;
        }
    });
    onClick(!click);
  }
  return (
    <SideContainer>
      <Title>Sprints</Title>
      {sprints.map((sprint) => (
        <DataCard
          project={sprint.project}
          sprint={sprint.sprintNum}
          start={sprint.start}
          end={sprint.end}
          open={sprint.open}
          onClick={sprintClicked}
          isBacklog={sprint.isBacklog}
          isStart={sprint.isStart}
        />
      ))}
    </SideContainer>
  );
};

export default SideBar;
