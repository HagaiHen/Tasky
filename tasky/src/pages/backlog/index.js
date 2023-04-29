import React from 'react'
import { Container, ContentContainer } from './styles'
import Header from '../../components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'
import Tasks from '@/components/Tasks/Tasks'
const Backlog = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <SideBar />
        <Tasks />
      </ContentContainer>
    </Container>
  );
}

export default Backlog