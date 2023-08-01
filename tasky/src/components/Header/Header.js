import Image from "next/image";
import React, { useState } from "react";
import { HeaderContainer, NavButton, Container } from "./styles";
import Backlog from "@/pages/backlog";
// import Calendar from "@/pages/calendar"; TODO: uncomment this line and implement the calendar page
import Home from "@/pages/home";

const NavHeader = (props) => {
  const [activePage, setActivePage] = useState("/home"); // State to track active page

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <Container>
      <HeaderContainer>
        <Image
          width={160}
          height={58}
          src="./Logo.svg"
          style={{ marginLeft: "15px" }}
        />
        <NavButton
          active={activePage === "/home"}
          onClick={() => handleNavigation("/home")}
        >
          Home
        </NavButton>
        <NavButton
          active={activePage === "/calendar"}
          onClick={() => handleNavigation("/calendar")}
        >
          Calendar
        </NavButton>
        <NavButton
          active={activePage === "/backlog"}
          onClick={() => handleNavigation("/backlog")}
        >
          Backlog
        </NavButton>
        <NavButton
          active={activePage === "/profile"}
          onClick={() => handleNavigation("/profile")}
        >
          Profile
        </NavButton>
        <Image
          width={70}
          height={38}
          src="./ProfileClicked.svg"
          style={{ marginLeft: "46%", marginTop: "1.2%", cursor: "pointer" }}
        />
      </HeaderContainer>
      {(() => {
        switch (activePage) {
          case "/home":
            return <Home />;
          case "/calendar":
            return <h1>Calendar Page</h1>;
          case "/backlog":
            return <Backlog />;
          case "/profile":
            return <h1>Profile Page</h1>;
          default:
            return <Home />;
        }
      })()}
    </Container>
  );
};

export default NavHeader;
