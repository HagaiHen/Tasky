import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HeaderContainer, Container, ButtonsContainer, LogoAndButtonsContainer } from "./styles";
import NavButton from "./NavButton";
import Backlog from "@/pages/backlog";
import CalendarPage from "@/pages/calendar";
import Home from "@/pages/home";
import { getAllProjectsByUserId } from "@/controller/ProjectController";
import Navbar from "../Navbar/Navbar";
import NavItem from "../NavIteam/NavItem";
import DDMenu from "../Dropdown/DDMenu";
import DropdownItem from "../Dropdown/DropdownItem";

const headerButtons = ["Home", "Calendar", "Backlog", "Profile"];

const NavHeader = (props) => {
  const [activePage, setActivePage] = useState("Home"); // State to track active page
  const [dropdownOpen, setDropdownOpen] = useState(false); // set the state of the dropdown.

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const handleDropDown = () =>{
    console.log("I Pressed Me !!, dropdownOpen:", dropdownOpen);
    setDropdownOpen(dropdownOpen => !dropdownOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(prev => !prev);
    params.reRender();
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
        <NavItem
          imageSrc="./ProfileClicked.svg"
          onClick={() => handleDropDown()}
          style={{ marginLeft: "35%", marginTop: "1.2%", cursor: "pointer" }}
      >
        <DDMenu setActivePage={setActivePage}  /> 
      </NavItem>


      </HeaderContainer>
        {(() => {
          switch (activePage) {
            case "Home":
              return <Home user={props.user}/>;
            case "Calendar":
              return <CalendarPage user={props.user}/>;
            case "Backlog":
              return <Backlog user={props.user}/>;
            case "Profile":
              return <h1>Profile Page</h1>;
            case "Settings":
              return <h1>Settings Page</h1>;
            default:
              return <Home />;
          }
        })()}
    </Container>
  );
};

export default NavHeader;
