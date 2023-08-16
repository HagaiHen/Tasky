import * as React from "react";
import { useState, useEffect } from "react";
import { getMessage, postMessage } from "../../controller/APIController";
import { Container, ContentContainer, LeftContainer, RightContainer } from "./styles";
import { ModalProvider } from "styled-react-modal";
import Avatar from '@mui/material/Avatar';
import { getUser } from "@/controller/UserController";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Calendar from "@/components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import ProgChart from "@/components/ProgChart/ProgChart";
import EventOps from "@/components/EventOps/EventOps";
import Scheduler from "@/components/Scheduler/Scheduler";
import { styled } from '@mui/material/styles';


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(2),
  fontSize: 40,
}));

const ProfilePage = (props) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [tasks , setTasks ] = useState([]);
  const uid = props.user.uid;
  const [render, reRender] = useState(false);
  const [user, setUser] = useState(false);

  const handleEditClick = () => {
    // Your logic for handling the edit click goes here
    console.log('Edit icon clicked');
  }
  
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await getMessage(`event/getAllEventsByUID/${uid}`);
        const responseTasks = await getMessage(`task/getTaskByUid/${uid}`);
        const currUser = await getUser(uid);
        console.log("user", currUser);
        setUser(currUser);
        if (response ) {
          setEvents(response);
        }
        if (responseTasks ) {
          setTasks(responseTasks);
        }
      } catch (error) {
        console.error("[Scheduler] Failed to fetch events:", error);
      }
    };
    fetchData();
  }, [date, render, user]);


//   return (
// <ModalProvider>
//   <Container>

//   </Container>
// </ModalProvider>

    
//   );

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
      <h1>{user.firstName} {user.lastName}</h1>
      <Div>Hagai Hen</Div>
      
      <h2>Role: </h2>
      
      <h2>Location: </h2>

      <h2>Email: </h2>
      
      <h2>Phone: </h2>

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
