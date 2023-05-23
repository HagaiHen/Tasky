// import { ListItem } from '@mui/material';
import React, { useState } from "react";
import {
  ChoosingList,
  ChosenItem,
  Description,
  ListContainer,
  ListItem,
  ListSpacer,
  ListDescription,
} from "./styles";
const DropDown = (props) => {
  const [open, isOpen] = useState(false);
  const [chosen, setChosen] = useState(props.list[0]);
  return (
    <>
      <ChosenItem
        onClick={() => {
          isOpen(!open);
        }}
      >
        <Description>{chosen}</Description>
      </ChosenItem>
      {open && (
        <ChoosingList list={props.list}>
          {props.list.map((item) => (
            <>
              <ListItem
                onClick={() => {
                  setChosen(item);
                  isOpen(false);
                }}
              >
                <Description style={{ marginTop: "3%" }}>
                  {item}
                </Description>
              </ListItem>
              <ListSpacer />
            </>
          ))}
        </ChoosingList>
      )}
    </>
  );
};

export default DropDown;
