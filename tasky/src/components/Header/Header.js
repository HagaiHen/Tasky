import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HeaderContainer, Container, ButtonsContainer, LogoAndButtonsContainer } from "./styles";
import NavButton from "./NavButton";
import Backlog from "@/pages/backlog";
import CalendarPage from "@/pages/calendar";
// import Calendar from "@/pages/calendar";// TODO: uncomment this line and implement the calendar page
import Home from "@/pages/home";
import { getAllProjectsByUserId } from "@/controller/ProjectController";

const headerButtons = ["Home", "Calendar", "Backlog", "Profile"];

const NavHeader = (props) => {
  const [activePage, setActivePage] = useState("Home"); // State to track active page
  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <Container>
      <HeaderContainer>
        <LogoAndButtonsContainer>
        <Image
          width={160}
          height={58}
          src="./Logo.svg"
          style={{ marginLeft: "15px", marginTop: "1.2%", cursor: "pointer" }}
          // redirect to https://github.com/HagaiHen/Final-Project
          onClick={() => window.open("https://github.com/HagaiHen/Final-Project", "_blank")}
        />
        <ButtonsContainer>
          {headerButtons.map((button) => (
            <NavButton
              active={activePage === button}
              onClick={() => handleNavigation(button)}
              title={button}
            />
          ))}
        </ButtonsContainer>
        </LogoAndButtonsContainer>
        <Image
          width={70}
          height={38}
          src="./ProfileClicked.svg"
          style={{ marginLeft: "35%", marginTop: "1.2%", cursor: "pointer" }}
        />
      </HeaderContainer>
        {(() => {
          switch (activePage) {
            case "Home":
              return <Home />;
            case "Calendar":
              return <CalendarPage user={props.user}/>;
            case "Backlog":
              return <Backlog user={props.user}/>;
            case "Profile":
              return <h1>Profile Page</h1>;
            default:
              return <Home />;
          }
        })()}
    </Container>
  );
};

export default NavHeader;
