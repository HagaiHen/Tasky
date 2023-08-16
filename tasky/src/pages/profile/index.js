import * as React from "react";
import { useState, useEffect } from "react";
import { getMessage, postMessage } from "../../controller/APIController";
import { Container, InputField, LeftContainer, RightContainer, ProfileTextTitle, ProfileTextRole, ProfileTextEmail, ProfileTextPhone, ProfileTextAbout, InputFieldAbout } from "./styles";
import { ModalProvider } from "styled-react-modal";
import Avatar from '@mui/material/Avatar';
import { getUser, updateUser } from "@/controller/UserController";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Calendar from "@/components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import ProgChart from "@/components/ProgChart/ProgChart";
import EventOps from "@/components/EventOps/EventOps";
import Scheduler from "@/components/Scheduler/Scheduler";
import { styled } from '@mui/material/styles';



const ProfilePage = (props) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [tasks , setTasks ] = useState([]);
  const uid = props.user.uid;
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
  }, [date, render, handleInputChange]);

  const handleInputChange = async (field, value) => {
    console.log("field", field);
    console.log("value", value);
    
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));

    console.log("user after change", user);
    // Call updateUser in the callback after setUser has updated the state
    updateUser(user).then((response) => {
      console.log("response", response);
    });
  };


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
      <div style={{ position: "relative" }}>
        <Avatar sx={{ width: 150, height: 150 }} />
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
              <ProfileTextAbout>About: {user.about}</ProfileTextAbout>
            </>
          )}
        </div>

  </LeftContainer>

<RightContainer>
<ProgChart 
            uid={uid}
            tasks={tasks}
          />

</RightContainer>
</Container>
);

};

export default ProfilePage;
