// /dashboard/
// a simple hello world component
import React, {useState} from 'react'
import { Container, ContentContainer } from './styles'
import Header from '../../components/Header/Header'
import SideBar from '../dashboard/SideBar/SideBar'
import Tasks from '../dashboard/Tasks/Tasks'
import { ModalProvider } from "styled-react-modal";

export default function Dashboard() {
    const [selectedSprint, setSelectedSprint] = useState(-1);
  const renderSelectedSprint = (sprint) => {
    setSelectedSprint(sprint);
  }

  const [selectedSprintStart, setSelectedSprintStart] = useState(false);
  const renderSelectedSprintStart = (sprint) => {
    setSelectedSprintStart(sprint);
  }

  const [selectedProject, setSelectedProject] = useState(false);
  const renderSelectedProject = (sprint) => {
    setSelectedProject(sprint);
  }
    return (
        <ModalProvider>
          <Container>
            <Header />
            <ContentContainer>
              <SideBar selectSprint={renderSelectedSprint} isStart={renderSelectedSprintStart} project={renderSelectedProject}/>
              <Tasks selectedSprint={selectedSprint} isStart={selectedSprintStart} project={selectedProject}/>
            </ContentContainer>
          </Container>
        </ModalProvider>
      );
};