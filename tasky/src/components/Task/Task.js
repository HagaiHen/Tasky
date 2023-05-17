import React from 'react'
import { TaskContainer, Priority, Title, Description, Spacer, StatusText, Selected, DescriptionContainer } from './styles'
import Image from 'next/image';

const Task = (props) => {

  const formatDescription = (desc) => {
    console.log(desc.length);
    if(desc.length > 20){
      return desc.substring(0,17)+'...';
    }
    return desc;
  }
  return (
    <TaskContainer>
      <Priority color={props.color} />
      <Title>TAS - 1</Title>
      <DescriptionContainer>
        <Description size={props.description.length}>
          {formatDescription(props.description)}
        </Description>
      </DescriptionContainer>
      <Spacer />
      <Title>Status: </Title>
      <Selected>
        <StatusText>{"IN PROGRESS"}</StatusText>
      </Selected>
      <Spacer />
      <Title>Assignee: </Title>
      <Selected>
        <StatusText>{"Bar Goldenberg"}</StatusText>
      </Selected>
      <Spacer />
      <Image
        src={"./Trash.svg"}
        width={20}
        height={20}
        style={{ alignSelf: 'center', marginLeft: "33px" }}
      />
    </TaskContainer>
  );
}

export default Task