import React from 'react'
import { TaskContainer, Priority, Title, Description, Spacer, TitleMid, ChosenItem, ListItem } from './styles'
import DropDown from './DropDown';
import Image from 'next/image';

const Task = (props) => {
  return (
    <TaskContainer>
      <Priority color={props.color}/>
      <Title>TAS - 1</Title>
      <Description>Task description</Description>
      <Spacer />
      <TitleMid>Status: </TitleMid>
      <DropDown list={["IN PROGRESS", "IN REVEIW", "DONE"]} />
      <Spacer />
      <TitleMid>Assignee: </TitleMid>
      <DropDown list={["Bar", "Sappir", "Hagai", "Elad"]} />
      <Spacer />
      <Image
        src={"./Trash.svg"}
        width={20}
        height={20}
        style={{ marginLeft: "1%", marginTop: "0.5%" }}
      />
    </TaskContainer>
  );
}

export default Task