import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import { getMessage, postMessage } from "../../controller/APIController";
import { EventModal } from "../EventModal/EventModal";
import TaskModal from "../TaskModal/TaskModal";
import { CreateTaskButton } from "./styles";


const emptyData = {
  title:"",
  description:"",
  status:""
}

const EventButton = (params) => {
  const [openEventsDialog, setOpenEventsDialog] = useState(false);
  const [openDescriptionDialog, setOpenDescriptionDialog] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const [isDelete, setIsDelete] = useState(false); // Flag to indicate delete operation
  const [currentTaskData,updateCurrentData] = useState(emptyData); // the current task data we are looking at.

  const handleMyTasks = () =>{
    setOpenTask(true);
  }

  const handleUpdateEvent = (isDelete) => {
    setIsDelete(isDelete); // Set the delete flag
    setOpenEventsDialog(true);
  };

  

  const handleClose = () => {
    setOpenEventsDialog(false);
    setOpenDescriptionDialog(false);
    params.reRender();
    setOpenTask(false);
  };

  // Helper function to validate the date format
  const isValidDateFormat = (dateString) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    return pattern.test(dateString);
  };

  const isValidHourFormat = (hourString) => {
    const pattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return pattern.test(hourString);
  };

  const handleSelectUpdate = async (data) => {
    if (isDelete) {
      await deleteEvent(data);
      setIsDelete(false);
      setOpenEventsDialog(false);
    } else {
      const newDescription = prompt("Enter new description:", data.Description);
      let newDate = prompt("Enter new date (yyyy-mm-dd):", data.Date);
      if (
        newDate !== null &&
        newDate.trim() !== "" &&
        !isValidDateFormat(newDate)
      ) {
        newDate = prompt(
          "Invalid date format. Enter new date (yyyy-mm-dd):",
          data.Date
        );
      }

      let newHour = prompt("Enter new hour (hh:mm):", data.Hour);
      if (
        newHour !== null &&
        newHour.trim() !== "" &&
        !isValidHourFormat(newHour)
      ) {
        newHour = prompt(
          "Invalid hour format. Enter new hour (hh:mm):",
          data.Hour
        );
      }

      if (newDescription !== null) {
        data.Description = newDescription;
      }

      if (newDate !== null && newDate.trim() !== "") {
        data.Date = newDate;
      }

      if (newHour !== null && newHour.trim() !== "") {
        data.Hour = newHour;
      }

      // Update operation
      await updateEvent(data);
    }
    setOpenEventsDialog(false);
  };

  const deleteEvent = async (data) => {
    // Perform the delete operation
    // Call your delete API or perform any necessary delete actions
    // Example: Call postMessage to delete the event
    await getMessage(`event/deleteEvent/${data.event_id}`);
    params.reRender();
  };

  const updateEvent = async (data) => {
    // Perform the update operation
    // Call your update API or perform any necessary update actions
    // console.log("updateEvent: ", data);
    // Example: Call postMessage to update the event
    await postMessage("event/updateEvent", data);
    params.reRender();
  };

  const openDescription = async (data) => {
    updateCurrentData(data);
    setOpenDescriptionDialog(true);
    // console.log("Task Title: ", data.description);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(prev => !prev);
    params.reRender();
  };
  const [isOpenTask, setIsOpenTask] = useState(false);
  const toggleModalTask = () => {
    setIsOpenTask(isOpenTask =>!isOpenTask);
  };

  const copyEvent = () => {
    console.log("copyEvent: Clicked Me!");
  };

  return (
    <> 
      <EventModal isOpen={isOpen} toggleModal={toggleModal} user={params.user} uid={params.uid}/>
      <TaskModal isOpen={isOpenTask} toggleModal={toggleModalTask}/>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          variant="contained"
          sx={{ bgcolor: "silver", width: "150px", color: "#4b4747" }}
          onClick={toggleModal}
        >
          Create Event
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "silver", width: "150px", color: "#4b4747" }}
          onClick={() => handleUpdateEvent(false)} // Pass false for update operation
        >
          Update Event
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "silver", width: "150px", color: "#4b4747" }}
          onClick={() => handleUpdateEvent(true)} 
        >
          Delete Event
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "silver", width: "150px", color: "#4b4747" }}
          onClick={copyEvent}
        >
          Copy Event
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "gainsboro",
            width: "150px",
            color: "#4b4747",
            ml: "25px",
          }}
          onClick={handleMyTasks}
        >
          My Tasks
        </Button>
        {/* <CreateTaskButton onClick={toggleModalTask}> */}
        <Button
          variant="contained"
          sx={{ bgcolor: "gainsboro", width: "150px", color: "#4b4747" }}
          onClick={toggleModalTask}
        >
          Create Task
        </Button>
        {/* </CreateTaskButton> */}
      </ButtonGroup>

      <Dialog open={openEventsDialog} onClose={handleClose} PaperProps={{ sx: { bgcolor: "#4b4747" } }} >
        <DialogTitle>
        {isDelete ? "Select Event to Delete" : "Select Event to Update"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            {params.events.map((event) => (
              <Button
                onClick={() => handleSelectUpdate(event)}
                key={event.event_id}
              >
                {event.Description}
              </Button>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openTask}
        onClose={handleClose}
        PaperProps={{ sx: { bgcolor: "#4b4747" } }} // Set dialog background color
      >
        <DialogTitle sx={{ borderBottom: '1px solid #bdff51', color: 'white' }}>My Tasks</DialogTitle>
        <DialogContent>
          <Stack spacing={1} justifyContent="start">
            {params.tasks.map((task) => (
              <Button
                key={task.id}
                sx={{ color: "white", fontFamily: "sans-serif" }} // Set text color to white
                onClick={()=> openDescription(task.data)}
              >
                <span
                  style={{
                    color:
                      task.data.status === "1"
                        ? "Black" // BackLog
                        : task.data.status === "2"
                        ? "Black" // To Do
                        : task.data.status === "3"
                        ? "Black" // In Progress
                        : task.data.status === "4"
                        ? "Black" // Done
                        : "white", // Default color
                  }}
                >
                  {task.data.status === "1" && "BackLog: "}
                  {task.data.status === "2" && "To Do: "}
                  {task.data.status === "3" && "In Prog: "}
                  {task.data.status === "4" && "Done: "}
                </span>
                {task.data.title}
              </Button>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog> 

      <Dialog open={openDescriptionDialog} onClose={handleClose} PaperProps={{ sx: { bgcolor: "#4b4747" } }}>
      <DialogTitle sx={{ borderBottom: '1px solid #bdff51', color: 'white' }}>Name: 
      <span style={{color:"black"}}> {currentTaskData.title}</span>
      </DialogTitle>
      <DialogTitle sx={{ borderBottom: '1px solid #bdff51', color: 'white' }}>Status: 
      <span style={{color:"black"}}> 
        {currentTaskData.status === "1" && " BackLog "}
        {currentTaskData.status === "2" && " To Do "}
        {currentTaskData.status === "3" && " In Prog "}
        {currentTaskData.status === "4" && " Done "}
        </span>
      </DialogTitle>
      <DialogTitle sx={{ borderBottom: '1px solid #bdff51', color: 'white' }}>Description: 
      <span style={{color:"black"}}> {currentTaskData.description}</span>
      </DialogTitle>
        <DialogContent>
          <Stack spacing={1} justifyContent="start">
                  
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EventButton;
