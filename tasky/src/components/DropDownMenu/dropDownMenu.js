import React from "react";
import Select from "react-select";
import { DropDownContainer, ParamType } from "./styles";


const DropDownMenu = (props) => {
  const getListOptions = () => {
    if(!props.title){
        return [
          { value: 0, label: "TO DO" },
          { value: 0, label: "SELECTED FOR DEVELOPMENT" },
          { value: 0, label: "IN PROGRESS" },
          { value: 0, label: "IN REVIEW" },
          { value: 0, label: "IN TESTING" },
          { value: 0, label: "DONE" },
        ];
    }
    switch(props.title){
        case "Assignee":
            return []
        default:
            return [
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" }
            ];
    }
  }
  return (
    <DropDownContainer>
      <ParamType>{props.title}</ParamType>
      <div style={{ marginTop: "10px" }}>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: "sans-serif",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: "sans-serif",
            }),
          }}
          options={getListOptions()}
          defaultValue={getListOptions()[0]}
        />
      </div>
    </DropDownContainer>
  );
};

export default DropDownMenu;
