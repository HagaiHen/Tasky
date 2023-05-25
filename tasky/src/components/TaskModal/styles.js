import styled from "styled-components";
import Modal from "styled-react-modal";

const colors = {
  red: "#f87777",
  yellow: "#f8d96c",
  green: "#bdff51",
};

export const TaskModalStyled = Modal.styled`
  width: 60rem;
  height: 46rem;
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

export const DescriptionContainer = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.color ? colors[props.color] : colors.green};
  /* padding-left: 10px;/ */
  padding-right: 10px;
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  overflow: auto;
  align-items: flex-start;
  padding-left: 30px;
`;
export const TaskParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;
export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding-top: 10px;
  /* padding-right: 20px; */
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
  background-color: ${(props) => colors[props.color]};
  margin-left: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ParamContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) =>
    props.color ? colors[props.color] : colors.green};
  border-style: solid;
  padding: 10px 30px 10px;
  overflow: auto;
  height: 30rem;
`;
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) =>
    props.color ? colors[props.color] : colors.green};
  border-style: solid;
  padding: 10px 30px 10px;
`;

export const ParamTitle = styled.text`
  font-family: sans-serif;
  color: white;
  margin-bottom: 10px;
`;

export const ParamLine = styled.div`
  width: 100%;
  height: 0px;
  border-color: ${(props) =>
    props.color ? colors[props.color] : colors.green};
  border-style: solid;
  border-width: 1px;
`;

export const ProgressTitle = styled.text`
  font-family: sans-serif;
  color: white;
  font-weight: 400;
  font-size: 1em;
  margin-bottom: 10px;
  letter-spacing: 0.3em;
`