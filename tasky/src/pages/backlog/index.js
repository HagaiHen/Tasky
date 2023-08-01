import React, { useState } from "react";
import { Container, ContentContainer } from "./styles";
import Header from "../../components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import Tasks from "@/components/Tasks/Tasks";
import { ModalProvider } from "styled-react-modal";

const Backlog = () => {
  const [selectedSprint, setSelectedSprint] = useState("lUcZmmWjS2BfFTgvsxWF");

  const renderSelectedSprint = (sprint) => {
    setSelectedSprint(sprint);
  };

  return (
    <ContentContainer>
      <SideBar selectSprint={renderSelectedSprint} />
      <Tasks selectedSprint={selectedSprint} />
    </ContentContainer>
  );
};

export default Backlog;
