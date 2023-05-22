// /dashboard/
// a simple hello world component
import React, {useState} from 'react'
import { Container, ContentContainer } from './styles'
import Header from '../../components/Header/Header'
import SideBar from '../dashboard/SideBar/SideBar'
import Tasks from '../dashboard/Tasks/Tasks'
import { ModalProvider } from "styled-react-modal";

export default function Dashboard() {
    const [selectedSprint, setSelectedSprint] = useState(0);
  const renderSelectedSprint = (sprint) => {
    setSelectedSprint(sprint);
  }
    return (
        <ModalProvider>
          <Container>
            <Header />
            <ContentContainer>
              <SideBar selectSprint={renderSelectedSprint} />
              <Tasks selectedSprint={selectedSprint}/>
            </ContentContainer>
          </Container>
        </ModalProvider>
      );
};