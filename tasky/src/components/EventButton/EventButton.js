import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const EventButton = (params) => {

    /*PopUp window for creating new Event*/
    const createEvent = () => {  
        // Open a new popup window for the details text boxes
        const windowFeatures = "width=500,height=400,resizable=no";
        const url = `/create-event-popup?uid=${params.uid}`;
        window.open(url, 'Create Event', windowFeatures); 
    };

    const updateEvent = () =>{
        console.log("updateEvent: Clicked Me!");
    };

    const deleteEvent = () =>{
        console.log("deleteEvent: Clicked Me!");
    };
    
    const copyEvent = () =>{
        console.log("copyEvent: Clicked Me!");
    };

    return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant="contained" sx={{ bgcolor: 'gainsboro', width: '150px', color: '#4b4747' }} onClick={createEvent}>
        Create Event
        </Button>
        <Button variant="contained" sx={{ bgcolor: 'gainsboro', width: '150px', color: '#4b4747' }} onClick={updateEvent}>
        Update Event
        </Button>
        <Button variant="contained" sx={{ bgcolor: 'gainsboro', width: '150px', color: '#4b4747' }} onClick={deleteEvent}>
        Delete Event
        </Button>
        <Button variant="contained" sx={{ bgcolor: 'gainsboro', width: '150px', color: '#4b4747' }} onClick={copyEvent}>
        Copy Event
        </Button>
    </ButtonGroup>
    );
}

export default EventButton;