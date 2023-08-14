import React, { useState } from "react";
import styles from "./styles"; // Assuming this is your styles file
import Image from "next/image";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <li style={styles.navItem}>
      <a
        style={{
          ...styles.iconButton,
          filter: isButtonHovered ? 'brightness(1.2)' : 'none',
          ...props.style, // Add any other styles passed as prop
        }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        onClick={() => { 
          setOpen(!open);
          if(props.onClick) props.onClick(); // call the click handler if provided
        }}
      >
        {props.imageSrc && (
          <Image
            width={70}
            height={38}
            src={props.imageSrc}
          />
        )}
        {props.icon && <svg style={styles.svg}>{props.icon}</svg>}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavItem;