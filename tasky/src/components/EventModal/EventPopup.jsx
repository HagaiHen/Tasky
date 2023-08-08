import * as React from 'react';
import Image from "next/image";
import { postMessage } from '@/controller/APIController';
import {Title, Description} from './styles';
import { SepLine } from '../Scheduler/styles';

const CreateEventPopup = (props) => {
    const handleCreateEvent =  async () => {
        // Retrieve the values from the input fields
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const hour = document.getElementById('hour').value;

        // Access the uid from the URL
        const uid = props.user.uid;


        const dataToSend = {
            'Description': description,
            'Date': date,
            'Hour': hour,
            'uid': uid
        }
        
        const sendData = async (data) =>  {
          try {
            const psData = await postMessage('event/createEvent', data);
            console.log("[Create Event - PopUp] Event Created!, Event id:", psData.eventId);
            return psData.eventId;
          } catch (error) {
            console.error('[Create Event - PopUp] Failed to send data:', error);
            throw error; // Propagate the error to the caller
          }
        };

        try {
          console.log("[Create Event - PopUp] Event Created! ", await sendData(dataToSend));
          props.toggleModal();
        } catch (error) {
          console.error('Failed to create event:', error);
          // Handle the error or display an error message to the user
        }   
    };

  return (
    <div
      style={{
        backgroundColor: '#4b4747',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height:"100%"
      }}
    >
        <Image
        width={160}
        height={58}
        src="./Logo.svg"
        style={{ marginLeft: "15px" }}
      />
      <Title>Create Event</Title>
      <div style={{marginTop: "6%"}}>
        <Description htmlFor="description">Description:</Description>
        <br />
        <textarea style={{borderRadius: "10px", marginTop: "10px"}}id="description" rows="4" cols="50"></textarea>
        <br />
        <Description htmlFor="description">Choose Date:</Description>
        <br />
        <input style={{marginTop: "1%", marginBottom:"1%"}} type="date" id="date" />
        <br />
        <Description htmlFor="description">Choose Hour:</Description>
        <br />
        <input style={{marginTop: "1%"}} type="time" id="hour" />
      </div>
      <button style={{marginTop: "5%", height:"10%",borderRadius: "10px", letterSpacing: "0.2em"}} onClick={handleCreateEvent}>Create Event</button>
      <button style={{marginTop: "1%", height:"10%",borderRadius: "10px", letterSpacing: "0.2em"}} onClick={props.toggleModal}>Cancel Event</button>
    </div>
  );
};

export default CreateEventPopup;