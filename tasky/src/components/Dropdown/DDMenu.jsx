import React, { useState,useContext } from "react";
import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";
import styles from "./styles2";  // Import styles from styles2.js
import {AppContext, appContext} from "../../pages/_app"
import { getAuth } from "firebase/auth";
import { Button } from "react-aria-menubutton";
import NavHeader from "../Header/Header";

const DDMenu = (props) => {
  // state for csstransition
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const app = useContext(appContext);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  const handleMyProfile = () =>{
    console.log("You Pressed My Profile!");
    props.setActivePage('Profile'); // Sets the active page to 'Profile'
  }
  const handleSettings = () =>{
    console.log("You Pressed Settings!");
    props.setActivePage('Settings'); // Sets the active page to 'Profile'
  }
  const handleOtherUser = () =>{
    getAuth(app).signOut();
  }
  const handleLogOut = () =>{
    getAuth(app).signOut();
  }


  return (
    <div style={{ ...styles.dropdown, height: menuHeight }}>
      <CSSTransition
        in={active === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div style={styles.menu}>
          <DropdownItem
          setActive={setActive}
          onEnter = {()=>handleMyProfile()}
          >
            My Profile
            </DropdownItem>
          <DropdownItem
            setActive={setActive}
            onEnter={()=>handleSettings()}
          >
            Settings
          </DropdownItem>
          <DropdownItem  
            setActive={setActive}
            onEnter={()=>handleOtherUser()}
            >
          Change User
          </DropdownItem>
          <DropdownItem  
            setActive={setActive}
            onEnter={()=>handleLogOut()}
            >
          Log Out
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DDMenu;
