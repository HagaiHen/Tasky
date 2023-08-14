import React, { useState } from "react";
import styles from "./styles.js"; // assuming you saved the JS styles in this file

const DropdownItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <a
        style={{
          ...styles.menuItem,
          backgroundColor: isHovered ? '#525357' : 'transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => props.goToMenu && props.setActive(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    </>
  );
};

export default DropdownItem;