import React from "react";
import Select from "react-select";
import { DropDownContainer, ParamType } from "./styles";

const MultiDropDown = (props) => {
  const options = [
    {
      value: "id",
      label: "TAS - 1",
    },
    {
      value: "id1",
      label: "TAS - 2",
    },
    {
      value: "id2",
      label: "TAS - 3",
    },
  ];
  return (
    <DropDownContainer>
      <ParamType>{props.title}</ParamType>
      <div style={{ marginTop: "10px" }}>
        <Select
          isMulti
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: "sans-serif",
            }),
          }}
          options={options}
        />
      </div>
    </DropDownContainer>
  );
};

export default MultiDropDown;
