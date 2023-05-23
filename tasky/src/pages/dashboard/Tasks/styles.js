import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24;
  width: 80%;
  margin-left: 20%;
  height: 80%
  overflow: scroll;
  margin-bottom: 3%;

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
  width: 96%;
  height: 80%;
  align-self: center;
  overflow: scroll;
  margin: 40px;
`;
export const SearchTask = styled.input`
  background-color: #d9d9d9;
  width: 16%;
  height: 40%;
  border-radius: 10px;
  border-style: solid;
  border-color: transparent;
  margin-left: 2%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  margin-top: 2%;
`;

export const CreateTaskButton = styled.div`
  background-color: #bdff51;
  width: 12%;
  height: 40.5%;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  margin-left: 68%;
  /* margin-top: 2%; */
  /* margin-bottom: 20%; */
  display: flex;
  flex-direction: row;
  :hover {
    cursor: pointer;
    background-color: #729639;
  }
`;

export const CreateSprintButton = styled.div`
  background-color: #bdff51;
  width: 12%;
  height: 4%;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  margin-left: 40%;
  display: flex;
  flex-direction: row;
  :hover {
    cursor: pointer;
    background-color: #729639;
  }
`;

export const ButtonTitle = styled.h4`
  color: black;
  font-family: sans-serif;
  margin-top: 3%;
  margin-left: 9%;
`;
