import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8.24%;
  box-shadow: 1px 0.5px 1px 0.1px black;
  display: flex;
  flex-direction: row;
  z-index: 2;
  background-color: #4b4747;
`;


export const NavButton = styled.button`
  flex: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 15px;
  font-size: 18px; /* Updated font size */
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#BDFF51" : "white")}; /* Updated text color */
  font-family: sans-serif;
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #4b4747;
`;