import * as React from 'react';
import Image from "next/image";


const CreateEventPopup = () => {
    const handleClosePopup = () => {
        window.close();
    };

    const handleCreateEvent =  async () => {
        // Retrieve the values from the input fields
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const hour = document.getElementById('hour').value;

        // Access the uid from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const uid = urlParams.get('uid');


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
          window.close();
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
        justifyContent: 'space-between',
      }}
    >
        <Image
        width={160}
        height={58}
        src="./Logo.svg"
        style={{ marginLeft: "15px" }}
      />
      <h2 >Create Event</h2>
      <div>
        <label htmlFor="description">Description:</label>
        <br />
        <textarea id="description" rows="4" cols="50"></textarea>
        <br />
        <label htmlFor="date">Choose Date:</label>
        <br />
        <input type="date" id="date" />
        <br />
        <label htmlFor="hour">Choose Hour:</label>
        <br />
        <input type="time" id="hour" />
      </div>
      <button onClick={handleCreateEvent}>Create Event</button>
      <button onClick={handleClosePopup}>Cancel Event</button>
    </div>
  );
};

export default CreateEventPopup;