const colors = {
  red: "#f87777",
  yellow: "#f8d96c",
  green: "#bdff51",
};

const styles = {
  dropdown: {
    position: "absolute",
    top: "58px",
    width: "300px",
    transform: "translateX(-45%)",
    backgroundColor: "#4b4742",
    border: "0.8px solid black",
    borderRadius: "14px",
    padding: "1rem",
    overflow: "hidden",
    transition: "height var(--speed) ease",
    fontFamily: "sans-serif",
    marginLeft: "5px",
    fontWeight: "600",
    fontSize: "1.1em",
    letterSpacing: "0.2em"
    
  },
  "menu-primary-enter": {
    position: "absolute",
    transform: "translateX(-110%)"
  },
  "menu-primary-enter-active": {
    transform: "translateX(0%)",
    transition: "all var(--speed) ease"
  },
  "menu-primary-exit": {
    position: "absolute"
  },
  "menu-primary-exit-active": {
    transform: "translateX(-110%)",
    transition: "all var(--speed) ease"
  },
  "menu-secondary-enter": {
    transform: "translateX(110%)"
  },
  "menu-secondary-enter-active": {
    transform: "translateX(0%)",
    transition: "all var(--speed) ease"
  },
  "menu-secondary-exit": {},
  "menu-secondary-exit-active": {
    transform: "translateX(110%)",
    transition: "all var(--speed) ease"
  }
};

export default styles;
