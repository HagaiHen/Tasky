import React from "react";
import Select from "react-select";
import { DropDownContainer, ParamType } from "./styles";
import makeAnimated from "react-select/animated";
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
  const animatedComponents = makeAnimated();
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
            option: (baseStyles, state) => ({
                ...baseStyles,
                fontFamily: "sans-serif"
            })
          }}
          options={options}
          components={animatedComponents}
        />
      </div>
    </DropDownContainer>
  );
};

export default MultiDropDown;
