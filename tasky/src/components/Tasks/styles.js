import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24;
  width: 80%;
  margin-left: 20%;
  height: 100%
  overflow: scroll;
  margin-bottom: 3%;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Title = styled.h1`
  color: white;
  font-family: sans-serif;
  margin-top: 0.2%;
  margin-left: 2%;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 30px;
  width: 100%;
  height: 80%;
  align-self: center;
  overflow: scroll;
  align-items: center;
`;
export const SearchTask = styled.input`
  background-color: #d9d9d9;
  width: 16%;
  height: 40%;
  border-radius: 10px;
  border-style: solid;
  border-color: transparent;
  padding-left: 1%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  margin-top: 2%;
  justify-content: space-between;
`;

export const CreateTaskButton = styled.div`
  background-color: #bdff51;
  height: 40.5%;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px; 
  :hover {
    cursor: pointer;
    background-color: #729639;
  }
`;

export const ButtonTitle = styled.h4`
  color: black;
  font-family: sans-serif;
`;

export const SearchBarContainer = styled.span`
  flex: 1;
`