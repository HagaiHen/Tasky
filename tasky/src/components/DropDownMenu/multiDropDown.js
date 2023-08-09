import React from "react";
import Select from "react-select";
import { DropDownContainer, ParamType } from "./styles";
import makeAnimated from "react-select/animated";
const MultiDropDown = (props) => {
  const options = props.tasks?.map((task) => ({
    label: `${props.project.name} - ${task.taskNum}`,
    value: task.taskId,
  }));
  const animatedComponents = makeAnimated();
  return (
    <DropDownContainer>
      <ParamType>{props.title}</ParamType>
      <div style={{ marginTop: "10px" }}>
        <Select
          isMulti
          onChange={props.onChange}
          defaultValue={props.defaultValue}
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
          options={options}
          components={animatedComponents}
        />
      </div>
    </DropDownContainer>
  );
};

export default MultiDropDown;
