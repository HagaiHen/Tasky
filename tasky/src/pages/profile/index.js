import * as React from "react";
import { useState, useEffect } from "react";
import { getMessage, postMessage } from "../../controller/APIController";
import { Container, InputField, LeftContainer,  FullContainer, TaskContainer, RightContainer, ProfileTextTitle, ProfileTextRole, ProfileTextEmail, ProfileTextPhone, ProfileTextAbout, InputFieldAbout } from "./styles";
import { ModalProvider } from "styled-react-modal";
import Avatar from '@mui/material/Avatar';
import { getUser, updateUser } from "@/controller/UserController";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Calendar from "@/components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import ProgChart from "./profileProgChart";
import EventOps from "@/components/EventOps/EventOps";
import ProfileScheduler from "./profileScheduler";
import { styled } from '@mui/material/styles';
import Joyride from 'react-joyride';




const ProfilePage = (props) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [tasks , setTasks ] = useState([]);
  const uid = props.user.uid;
  console.log("props", props);
  const [render, reRender] = useState(false);
  const [user, setUser] = useState(false);
  const [editMode, setEditMode] = useState(false); // Add this state


  const handleEditClick = () => {
    setEditMode(!editMode); // Toggle edit mode
  };
  
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await getMessage(`event/getAllEventsByUID/${uid}`);
        const responseTasks = await getMessage(`task/getTaskByUid/${uid}`);
        console.log("responseTasks", responseTasks);
        console.log("uid", uid);
        const currUser = await getUser(uid);
        console.log("currUser", currUser);

        if (currUser) {
          setUser(currUser);
        }
        if (response ) {
          setEvents(response);
        }
        if (responseTasks) {
          setTasks(responseTasks);
        }
      } catch (error) {
        console.error("[Scheduler] Failed to fetch events:", error);
      }
    };
    fetchData();
    console.log("TAsks", tasks);
  }, [date, render, handleInputChange]);

  const handleInputChange = async (field, value) => {
    const updatedUser = {
      ...user,
      [field]: value,
    };
  
    setUser(updatedUser);
  
    try {
      const response = await updateUser(updatedUser);
      console.log("response", response);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

console.log("TASKS", tasks);

const [steps] = useState([
  {
    target: ".first-component", 
    content: "Welcome to your happy place! 🌟 Customize your profile to reflect your unique style and make task management a joyous journey. Let's sprinkle some personality onto your oasis!",
    title:"Personalize Your Task Oasis!!"
  },
  {
    target: ".progChart-component", 
    content: "Step into the world of colorful accomplishments! 🎨 Your progress chart is a canvas of success. Watch as tasks transform through different shades, reflecting their stages of completion",
    title:"Colors of Achievement!"
  },
  {
    target: ".Assignments-component", 
    content: "Transform your ideas into achievements! 🌟 Your personal assignments are the bridge between dreams and reality. Nurture them with care and watch as they blossom into completed tasks!",
    title:"From Ideas to Accomplishments!"
  },
]);


return(
<Container>
  <LeftContainer>
  <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "0vh", // Adjust as needed for the full viewport height
        marginTop: "2vh"   // Adjust margin as needed
      }}
    >
      {props.isOnboarding && (
          <Joyride
            steps={steps}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
          />
        )}
      <div style={{ position: "relative" }}>
        <Avatar className="first-component"  sx={{ width: 150, height: 150 }} />
        <EditIcon
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontSize: 30,
            cursor: "pointer"
          }}
          onClick={handleEditClick}
        />    
        
      </div>
      {editMode ? (
            <>
              <InputField
                value={user.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <InputField
                value={user.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              <InputField
                value={user.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
              />
              <InputField
                value={user.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <InputField
                placeholder="Write your phone number..."
                value={user.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
              
              <InputFieldAbout
                placeholder="Write about yourself..."
                value={user.about}
                onChange={(e) => handleInputChange("about", e.target.value)}
                rows={3} // Set the initial number of rows (adjust as needed)
              />
            </>
          ) : (
            <>
              <ProfileTextTitle>
                {user.firstName} {user.lastName}
              </ProfileTextTitle>
              <ProfileTextRole>{user.role}</ProfileTextRole>
              <ProfileTextEmail>{user.email}</ProfileTextEmail>
              <ProfileTextPhone>{user.phone}</ProfileTextPhone>
              <ProfileTextAbout>{user.about}</ProfileTextAbout>
            </>
          )}
        </div>

  </LeftContainer>

<RightContainer>
  <FullContainer>
<ProgChart 
            className="progChart-component"
            uid={uid}
            tasks={tasks}
          />
          <TaskContainer> 
            <ProfileTextTitle>Personal Assignments</ProfileTextTitle>
            <ProfileScheduler 
            className="Assignments-component"
            date={new Date()}
            uid={uid}
            events={events}
          />
          </TaskContainer>
          </FullContainer>
</RightContainer>
</Container>
);

};

export default ProfilePage;