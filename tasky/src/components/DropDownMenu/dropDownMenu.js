import React from "react";
import Select from "react-select";
import { DropDownContainer, ParamType } from "./styles";

const DropDownMenu = (props) => {
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
        return [
          { value: 1, label: "Bar Goldenberg" },
          { value: 2, label: "Hagai Hen" },
          { value: 3, label: "Sappir Bohbot" },
          { value: 4, label: "Elad Sez" },
          { value: 5, label: "Other person" },
        ];
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
          defaultInputValue={props.defaultValue}
        />
      </div>
    </DropDownContainer>
  );
};

export default DropDownMenu;
