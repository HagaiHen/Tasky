import React, { useEffect, useState } from "react";
import DataCard from "../DataCard/DataCard";
import { SideContainer, Title } from "./styles";
const sprints = [
  {
    project: "TAS",
    sprintNum: 1,
    start: "18/04/23",
    end: "03/05/23",
    open: true,
  },
  {
    project: "TAS",
    sprintNum: 2,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 3,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 4,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 5,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 6,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 7,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 8,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 9,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 10,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 11,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 12,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 13,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 14,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
  {
    project: "TAS",
    sprintNum: 15,
    start: "18/04/23",
    end: "03/05/23",
    open: false,
  },
];
const SideBar = () => {
  const [click, onClick] = useState(true);
  const sprintClicked = (sprintNum) => {
    sprints.forEach((sprint)=>{
        if(sprint.sprintNum === sprintNum){
            sprint.open=true;
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
          start="18/04/23"
          end="03/05/23"
          open={sprint.open}
          onClick={sprintClicked}
        />
      ))}
    </SideContainer>
  );
};

export default SideBar;
