import Modal from "styled-react-modal";
import styled from "styled-components";

export const CreateSprintModalStyled = Modal.styled`
  width: 30rem;
  height: 30rem;
  justify-content: center;
  align-items: center; /* Center vertically */
  background-color: #303030;
  flex-direction: column;
  border-radius: 10px;
  border-color: transparent;
  border-width: 0px;
  border-style: transparent;
  text-align: center;
`;


export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: flex-center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  margin-bottom: 50px;
`;

const colors = {
    red: "#f87777",
    yellow: "#f8d96c",
    green: "#bdff51",
  };

export const SaveSprintButton = styled.div`
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.green};
  width: 150px;
  height: 30px;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;


export const MinorTitle = styled.h3`
  font-family: sans-serif;
  color: white;
  margin-left: 10px;
  letter-spacing: 0.2em;
`;