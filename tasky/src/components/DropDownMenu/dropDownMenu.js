import React, { useState, useEffect } from "react";
import Select from "react-select";
import { DropDownContainer, ParamType } from "./styles";
import { getUsersOfProject } from "@/controller/ProjectController";
import { getAllSprints } from "@/controller/SprintController";

const DropDownMenu = (props) => {
  // console.log("props", props);
  const [assignees, setAssignees] = useState([]);
  const [sprints, setSprints] = useState([]);
  const statusOptions = [
    { value: 0, label: "TO DO" },
    { value: 1, label: "SELECTED FOR DEVELOPMENT" },
    { value: 2, label: "IN PROGRESS" },
    { value: 3, label: "IN REVIEW" },
    { value: 4, label: "IN TESTING" },
    { value: 5, label: "DONE" },
  ];
  useEffect(() => {
    const getAssignees = async () => {
      if (!props.projectId) {
        return;
      }
      const assignees = await getUsersOfProject(props.projectId);
      setAssignees(assignees);
    };
    getAssignees();
  }, [props.projectId]);

    useEffect(() => {
    const getSprints = async () => {
      if (!props.projectId) {
        return;
      }
      const sprintslist = await getAllSprints(props.projectId);
      const sprints = sprintslist.map(sprint => ({
        value: sprint.sprintId,
        label: sprint.sprintNumber === 0 ? "Backlog" : sprint.sprintNumber
      }));
      setSprints(sprints);
      console.log("mapped2", sprints);
    };
    getSprints();getListOptions();
  }, [props.projectId]);

  const getListOptions = () => {
    if (!props.title) {
      return [
        { value: 0, label: "TO DO" },
        { value: 1, label: "SELECTED FOR DEVELOPMENT" },
        { value: 2, label: "IN PROGRESS" },
        { value: 3, label: "IN REVIEW" },
        { value: 4, label: "IN TESTING" },
        { value: 5, label: "DONE" },
      ];
    }
    switch (props.title) {
      case "Assignee":
        console.log("assignee2", assignees)
        return assignees;
      case "Sprints":
        console.log("sprints2", sprints);
        return sprints;

      default:
        return [
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" },
          { value: 4, label: "4" },
          { value: 5, label: "5" },
        ];
    }
  };
  return (
    <DropDownContainer>
      <ParamType>{props.title}</ParamType>
      <div style={{ marginTop: "10px" }}>
        <Select
          onChange={props.onChange}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: "sans-serif",
              color: "black",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: "sans-serif",
              color: "black",
            }),
          }}
          options={getListOptions()}
          defaultValue={props.defaultValue}
        />
      </div>
    </DropDownContainer>
  );
};

export default DropDownMenu;
