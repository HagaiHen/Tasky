import * as React from 'react';
import  {useState} from 'react';
import { Container, ContainerRaw } from './styles';
import { DataBox } from '../Calendar/styles';
import EventButton from '../EventButton/EventButton';


const EventOps = (params) => {
  const userId = params.uid;

  return (
    <Container>
      <ContainerRaw>
        <EventButton uid={userId}/>
      </ContainerRaw>
        
    </Container>
    
  );
}


export default EventOps;