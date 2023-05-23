import styled from "styled-components";
import Modal from "styled-react-modal";

const colors = {
  red: "#f87777",
  yellow: "#f8d96c",
  green: "#bdff51",
};

export const TaskModalStyled = Modal.styled`
  width: 60rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  background-color: #303030;
  flex-direction: column;
  border-radius: 10px;
  border-color: transparent;
  border-width: 0px;
  border-style: transparent;
  text-align: center;
`;
export const Title = styled.h1`
    font-family: sans-serif;
    color: white;
    margin-left: 10px;
`
export const Description = styled.h2`
  font-family: sans-serif;
  color: white;
  margin-left: 10px;
  font-weight: 400;
`;

export const TaskInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    overflow: auto;
    align-items: flex-start;
    padding-left: 30px;
`
export const TaskParamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
export const CloseContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    padding-top: 10px;
    /* padding-right: 20px; */
    flex: 1;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 20;

`
export const Priority = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${(props) => colors[props.color]};
  margin-left: 10px;
`;

export const AddTaskButton = styled.div`
  background-color: #bdff51;
  width: 20%;
  height: 8%;
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

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`