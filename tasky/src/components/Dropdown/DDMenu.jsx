import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";
import styles from "./styles2";  // Import styles from styles2.js
import { Button } from "react-aria-menubutton";

const DDMenu = () => {
  // state for csstransition
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  const handleMyProfile = () =>{
    console.log("You Pressed My Profile!");
  }
  const handleSettings = () =>{
    console.log("You Pressed Settings!");
  }
  const handleOtherUser = () =>{
    console.log("You Pressed OtherUser!");
  }
  const handleLogOut = () =>{
    console.log("You Pressed LogOut!");
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
            // goToMenu={"settings"}
            setActive={setActive}
            onEnter={()=>handleSettings()}
          >
            Settings
          </DropdownItem>
          <DropdownItem  
            // goToMenu="animals" 
            setActive={setActive}
            onEnter={()=>handleOtherUser()}
            >
          Change User
          </DropdownItem>
          <DropdownItem  
            // goToMenu="animals" 
            setActive={setActive}
            onEnter={()=>handleLogOut}
            >
          Log Out You Fuck...
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* <CSSTransition
        in={active === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div style={styles.menu}>
          <DropdownItem
            // leftIcon={<AiFillCaretLeft />}
            goToMenu={"main"}
            setActive={setActive}
          />
          <DropdownItem >HTML</DropdownItem>
          <DropdownItem >CSS</DropdownItem>
          <DropdownItem >JavaScript</DropdownItem>
          <DropdownItem >Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={active === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div style={styles.menu}>
          <DropdownItem
            goToMenu="main"
            // leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem >Kangaroo</DropdownItem>
          <DropdownItem >Frog</DropdownItem>
          <DropdownItem >Horse?</DropdownItem>
          <DropdownItem >Hedgehog</DropdownItem>
        </div>
      </CSSTransition> */}
    </div>
  );
};

export default DDMenu;
