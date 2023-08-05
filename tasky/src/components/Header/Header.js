import Image from "next/image";
import React, { useState } from "react";
import { HeaderContainer, Container, ButtonsContainer, LogoAndButtonsContainer } from "./styles";
import NavButton from "./NavButton";
import Backlog from "@/pages/backlog";
// import Calendar from "@/pages/calendar";// TODO: uncomment this line and implement the calendar page
import Home from "@/pages/home";

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
          style={{ marginLeft: "15px" }}
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
              return <h1>Calendar Page</h1>;
            case "Backlog":
              return <Backlog />;
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
