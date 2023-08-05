import styled from "styled-components";


export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 20%;
  background-color: #4b4747;
  z-index: 1;
  box-shadow: 1px 0.5px 1px 0.1px black;
  align-items: center;
  flex: 1;
  /* overflow: scroll !important; */
  overflow-x: hidden;
  overflow-y: scroll;
  /* overflow: hidden; */
  padding-top: 60px;
`;

export const Title = styled.h1`
  color: white;
  margin-top: 2%;
  font-family: sans-serif;
  margin-right: 50%;
`;