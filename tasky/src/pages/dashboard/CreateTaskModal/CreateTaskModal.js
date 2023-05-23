import React, { useState } from "react";
import {
  Title,
  TaskModalStyled,
  TaskInfoContainer,
  TaskParamsContainer,
  CloseContainer,
  DataContainer,
  TitleContainer,
  Priority,
  AddTaskButton,
  ButtonTitle,
} from "./styles";
import Image from "next/image";
import DescriptionInput from '../../../components/DescriptionInput/DescriptionInput'
import Comments from './Comments'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox, ListItemText } from '@mui/material';


const rate = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];

const tasks = [
  {
    label: "Tas - 1",
    value: 1,
  },
  {
    label: "TAS - 2",
    value: 2,
  },
  {
    label: "TAS - 3",
    value: 3,
  },
  {
    label: "TAS - 4",
    value: 4,
  },
  {
    label: "TAS - 5",
    value: 5,
  },
];




const TaskModal = (props) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxToggle = (value) => () => {
    const currentIndex = selectedValues.indexOf(value);
    const newSelectedValues = [...selectedValues];

    if (currentIndex === -1) {
      newSelectedValues.push(value);
    } else {
      newSelectedValues.splice(currentIndex, 1);
    }

    setSelectedValues(newSelectedValues);
  };

  const [taskTitle, setTaskTitle] = useState('');

  const handleTaskTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const [taskDesc, setTaskDesc] = useState('');

  const handleTaskDescChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const [taskUrg, setTaskUrg] = useState('');

  const handleTaskUrgChange = (event) => {
    setTaskUrg(event.target.value);
  };

  const [taskBusVal, setTaskBusVal] = useState('');

  const handleTaskBusValChange = (event) => {
    setTaskBusVal(event.target.value);
  };

  const [taskDevEff, setTaskDevEff] = useState('');

  const handleTaskDevEffChange = (event) => {
    setTaskDevEff(event.target.value);
  };

  const [taskRskRed, setTaskRskRed] = useState('');

  const handleTaskRskRedChange = (event) => {
    setTaskRskRed(event.target.value);
  };

  const handleAddTask = () => {
    console.log("taskTitle: ", taskTitle);
    console.log("taskDesc: ", taskDesc);
    console.log("task bus val: ", taskBusVal);
    console.log("taskDev eff: ", taskDevEff);
    console.log("taskRisk Reduction: ", taskRskRed);
    console.log("taskUrg: ", taskUrg);
    console.log("taskDep: ", selectedValues);
    
    // clear all data

    setSelectedValues([]);
    setTaskTitle('');
    setTaskDesc('');
    setTaskUrg('');
    setTaskBusVal('');
    setTaskDevEff('');
    setTaskRskRed('');
  };

  return (
    <TaskModalStyled
      isOpen={props.isOpen}
      onBackgroundClick={props.closeModal}
      onEscapeKeydown={props.closeModal}
    >
      <CloseContainer>
        <Image
          src={"./Close.svg"}
          width={30}
          height={30}
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => {
            props.closeModal();
          }}
        />
      </CloseContainer>
      <DataContainer>
        <TaskInfoContainer>
          <TitleContainer>
            <Priority color={props.priority} />
            <Title>Add Task</Title>
          </TitleContainer>
          <div style={{ width: '100%' }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Task Title"
            multiline
            maxRows={1}
            color="warning"
            style={{ width: '100%', marginBottom: '10px' }}
            InputLabelProps={{
              style: { color: 'grey'},
            }}
            value={taskTitle}
            onChange={handleTaskTitleChange}
          />
          
      <TextField
        id="outlined-multiline-flexible"
        label="Task Description"
        multiline
        maxRows={6}
        color="warning"
        style={{ width: '100%', marginBottom: '10px' }}
        InputLabelProps={{
          style: { color: 'grey'},
        }}
        value={taskDesc}
        onChange={handleTaskDescChange}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <TextField
          id="outlined-select-urgency"
          select
          label="Urgency"
          color="warning"
          style={{ flex: 1, marginBottom: '10px' }}
          InputLabelProps={{
            style: { color: 'grey'},
          }}
          value={taskUrg}
          onChange={handleTaskUrgChange}
        >
          {rate.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-busVal"
          select
          label="Business Value"
          color="warning"
          style={{ flex: 1, marginBottom: '10px' }}
          InputLabelProps={{
            style: { color: 'grey'},
          }}
          value={taskBusVal}
          onChange={handleTaskBusValChange}
        >
          {rate.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-devEff"
          select
          label="Development Efforts"
          color="warning"
          style={{ flex: 1, marginBottom: '10px' }}
          InputLabelProps={{
            style: { color: 'grey'},
          }}
          value={taskDevEff}
          onChange={handleTaskDevEffChange}
        >
          {rate.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-riskRedu"
          select
          label="Risk Reduction"
          color="warning"
          style={{ flex: 1, marginBottom: '10px' }}
          InputLabelProps={{
            style: { color: 'grey'},
          }}
          value={taskRskRed}
          onChange={handleTaskRskRedChange}
        >
          {rate.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div style={{width: '50%', display: 'flex', gap: '10px', marginLeft: '25%' }}>
      <TextField
        id="outlined-select-dep"
        select
        label="Set Dependecies"
        color="warning"
        style={{ flex: 1, marginBottom: '10px' }}
        InputLabelProps={{
          style: { color: 'grey' },
        }}
        SelectProps={{
          multiple: true,
          renderValue: (selected) => selected.join(', '),
        }}
        value={selectedValues}
        onChange={(event) => { 
          console.log(event.target.value); 
          setSelectedValues(event.target.value); 
        }}
      >
        {props.taskList.map((option) => (
          <MenuItem key={option.TaskNum} value={option.TaskNum}>
            <Checkbox
              checked={selectedValues.indexOf(option.TaskNum) !== -1}
              onClick={handleCheckboxToggle(option.TaskNum)}
            />
            <ListItemText primary={option.TaskNum} />
          </MenuItem>
        ))}
      </TextField>
      </div>
        <AddTaskButton onClick={handleAddTask}>
        <Image
          src="./Plus.svg"
          width={15}
          height={15}
          style={{ marginTop: "4%", marginLeft: "4%" }}
        />
        <ButtonTitle>Add Task</ButtonTitle>
      </AddTaskButton>
    </div>
        </TaskInfoContainer>
        <TaskParamsContainer></TaskParamsContainer>
      </DataContainer>
    </TaskModalStyled>
  );
};

export default TaskModal;
