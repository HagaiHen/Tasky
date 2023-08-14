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
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 60px;
`;

export const Title = styled.h2`
  color: white;
  /* margin-top: 2%; */
  font-family: sans-serif;
  /* margin-right: 50%; */
`;

export const CreateSprintButton = styled.div`
  background-color: #bdff51;
  height: 30px;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding-left: 4px;
  padding-right: 10px;
  :hover {
    cursor: pointer;
    background-color: #729639;
  }
`;

export const ButtonTitle = styled.h5`
  color: black;
  font-family: sans-serif;
`;

export const SprintHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`