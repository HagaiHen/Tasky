import * as React from 'react';
import  {useState} from 'react';
import { Container, ContainerRaw } from './styles';
import { DataBox } from '../Calendar/styles';


const EventOps = () => {

  
  return (
    <Container>
      <ContainerRaw>
        <DataBox>Create Event</DataBox>
        <DataBox>Update Event</DataBox>
      </ContainerRaw>
      <ContainerRaw>
        <DataBox>Create Event</DataBox>
        <DataBox>Update Event</DataBox>
      </ContainerRaw>
      
        
    </Container>
    
  );
}


export default EventOps;