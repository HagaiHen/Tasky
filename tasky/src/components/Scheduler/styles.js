import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    flex: 2;
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /* margin-right: 10px; */
    margin-top: 80px;
    margin-bottom: 80px;
    padding-left: 20px;
    border-radius: 10px;
`;

export const TasksTaskContainr = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    flex: 1;
    margin-right: 10px;
    margin-top: 80px;
    margin-bottom: 80px;
`;

export const Title = styled.h1`
  color: #4b4747;
  font-family: sans-serif;
  margin-top: 0.2%;
  margin-left: 2%;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 30px;
  width: 96%;
  height: 50%;
  align-self: center ;
  overflow: scroll;
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

export const ButtonTitle = styled.h4`
  color: black;
  font-family: sans-serif;
  margin-top: 3%;
  margin-left: 9%;
`;

export const SepLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #4b4747;
  margin: -20px 0;
`;
