import React, { useState, useEffect } from "react";
import {
  Title,
  TaskModalStyled,
  TaskInfoContainer,
  TaskParamsContainer,
  CloseContainer,
  DataContainer,
  TitleContainer,
  Priority,
  Description,
  ParamContainer,
  ParamTitle,
  ParamLine,
  DescriptionContainer,
  ProgressTitle,
  ProgressContainer,
  SaveTaskButton,
  ButtonTitle,
} from "./styles";
import Image from "next/image";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
import TitleInput from "../DescriptionInput/TitleInput";
import Comments from "./Comments";
import DropDownMenu from "../DropDownMenu/dropDownMenu";
import MultiDropDown from "../DropDownMenu/multiDropDown";
import { createTask, updateTask } from "@/controller/TaskController";
import Task from "@/model/task";
import { getUser } from "@/controller/UserController";
import {statusOptions} from "@/model/task";
import { getSprint } from "@/controller/SprintController";



const TaskModal = (props) => {
  console.log("props7", props);
  const [params, setParams] = useState(
    props.task
      ? props.task.toJSON()
      : new Task(
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          0,
          0,
          0,
          0,
          props.project?.taskNum
        ).toJSON()
  );
  useEffect(() => {
    setParams(
      props.task
        ? props.task.toJSON()
        : new Task(
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            0,
            0,
            0,
            0,
            props.project?.taskNum
          ).toJSON()
    );
  }, [props.project]);
  
  const [assignee, setAssignee] = useState({});
  const [sprint, setSprint] = useState({});
  
  useEffect(() => {
    const getAssignee = async () => {
      if (!props.task) {
        return;
      }
      const assignee = props.task.assigneeId;
      const sprintId = props.task.sprintId;
      if (!assignee) {
        return;
      }
      const user = await getUser(assignee);
      setAssignee({ label: user.firstName, value: assignee });
      const sprint = await getSprint(sprintId);
      setSprint({ label: sprint.sprintNumber === 0 ? "Backlog" : sprint.sprintNumber, value: sprint.sprintId });
    };
    getAssignee();
  }, [props.task]);

  // useEffect(() => {
  //   const getSprint = async () => {
  //     if (!props.task) {
  //       return;
  //     }
  //     const sprintId = props.task.sprintId;
  //     if (!sprintId) {
  //       return;
  //     }
  //     const sprint = await getSprint(sprintId);
  //     setSprint(sprint);
  //     console.log("sprint:", sprint);
  //   };
  //   getSprint();
  // }, [props.project]);

  // useEffect(() => {
  //   const getSprints = async () => {
  //     if (!props.project) {
  //       return;
  //     }
  //     const sprintslist = await getAllSprints(props.project.projectId);
  //     const mappedSprints = sprintslist.map(sprint => ({
  //       value: sprint.sprintId,
  //       label: sprint.sprintNumber === 0 ? "Backlog" : sprint.sprintNumber
  //     }));
  //     setSprints(mappedSprints);
  //     console.log("mapped2", sprints);
  //   };
  //   getSprints();
  // }, [props.task]);



  const onCreateTask = async () => {
    const task = Task.fromJSON(params);
    task.sprintId = props.sprint || props.project.backlogId;
    await createTask(task);
    props.updateProject({ taskNum: props.project.taskNum + 1 });
    props.toggleModal();
    props.updateTasks();
  };

  const onUpdateTask = async () => {
    const task = Task.fromJSON(params);
    console.log("task on update = ", task);
    await updateTask(task);
    props.toggleModal();
    props.updateTasks();
  };

  return (
    <TaskModalStyled isOpen={props.isOpen}>
      <CloseContainer>
        <Image
          src={"./Close.svg"}
          width={30}
          height={30}
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={props.toggleModal}
        />
      </CloseContainer>
      <DataContainer>
        <TaskInfoContainer>
          <TitleContainer>
            <Priority color={props.priority} />
            <Title>{`${props.project?.name} - ${
              props.task?.taskNum !== undefined
                ? props.task.taskNum
                : props.project?.taskNum
            }`}</Title>
          </TitleContainer>
          <DescriptionContainer color={props.priority}>
            <Description>TITLE</Description>
          </DescriptionContainer>
          <TitleInput
            title={props.task?.title}
            onInput={(e) => {
              setParams({ ...params, title: e.target.value });
            }}
          />
          <DescriptionContainer color={props.priority}>
            <Description>DESCRIPTION</Description>
          </DescriptionContainer>
          <DescriptionInput
            description={props.task?.description}
            onInput={(e) => {
              setParams({ ...params, description: e.target.value });
            }}
          />

          <ProgressContainer color={props.priority}>
            <ProgressTitle>SPRINT</ProgressTitle>
            <ParamLine color={props.priority} />
            <DropDownMenu
              onChange={(option) => {
                setParams({ ...params, sprintId: option.value });
              }}
              defaultValue={sprint} 
              title="Sprints"
              projectId={props.project?.projectId}
            />
          </ProgressContainer>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <SaveTaskButton
              color={props.priority}
              onClick={props.task ? onUpdateTask : onCreateTask}
            >
              <ButtonTitle>SAVE TASK</ButtonTitle>
            </SaveTaskButton>
          </div>
        </TaskInfoContainer>
        <TaskParamsContainer>
          <ProgressContainer color={props.priority}>
            <ProgressTitle>PROGRESS</ProgressTitle>
            <ParamLine color={props.priority} />
            <DropDownMenu
              onChange={(option) => {
                setParams({ ...params, status: option.value });
              }}
              defaultValue={statusOptions[props.task?.status] || null}
            />
          </ProgressContainer>
          <ParamContainer color={props.priority}>
            <ProgressTitle>PARAMETERS</ProgressTitle>
            <ParamLine color={props.priority} />
            <div style={{ overflow: "auto" }}>
              <MultiDropDown
                onChange={(options) => {
                  setParams({ ...params, dependencies: options });
                }}
                defaultValue={params.dependencies}
                title="Dependencies"
                tasks={props.tasks}
                project={props.project}
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, assigneeId: option.value });
                }}
                defaultValue={assignee}
                title="Assignee"
                projectId={props.project?.projectId}
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, urgency: option.value });
                }}
                defaultValue={
                  props.task?.urgency
                    ? { label: props.task.urgency, value: props.task.urgency }
                    : null
                }
                title="Urgency"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, buisnessValue: option.value });
                }}
                defaultValue={
                  props.task?.buisnessValue
                    ? {
                        label: props.task.buisnessValue,
                        value: props.task.buisnessValue,
                      }
                    : null
                }
                title="Buisness value"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, devEffort: option.value });
                }}
                defaultValue={
                  props.task?.devEffort
                    ? {
                        label: props.task.devEffort,
                        value: props.task.devEffort,
                      }
                    : null
                }
                title="Dev effort"
              />
              <DropDownMenu
                onChange={(option) => {
                  setParams({ ...params, riskReduction: option.value });
                }}
                defaultValue={
                  props.task?.riskReduction
                    ? {
                        label: props.task.riskReduction,
                        value: props.task.riskReduction,
                      }
                    : null
                }
                title="Risk Reduction"
              />
            </div>
          </ParamContainer>
        </TaskParamsContainer>
      </DataContainer>
    </TaskModalStyled>
  );
};

export default TaskModal;
