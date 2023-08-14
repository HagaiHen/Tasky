import styled from "styled-components";
import Modal from "styled-react-modal";

const colors = {
  red: "#f87777",
  yellow: "#f8d96c",
  green: "#bdff51",
};

export const CreateProjectModalStyled = Modal.styled`
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center; /* Add this line */
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
  letter-spacing: 0.2em;
`;
export const Description = styled.text`
  font-family: sans-serif;
  color: black;
  margin-left: 5px;
  font-weight: 600;
  font-size: 1.5em;
  letter-spacing: 0.2em;
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: flex-start;
`;

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding-top: 10px;
  flex: 1;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 20;
`;
export const Priority = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.green};
  margin-left: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const TitleInputContainer = styled.div`
  align-items: center;
  margin-bottom: 50px;
`;

export const SaveProjectButton = styled.div`
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

export const ButtonTitle = styled.h4`
  color: black;
  font-family: sans-serif;
`;

