import styled from "styled-components";

const colors = {
  red: "#f87777",
  yellow: "#f8d96c",
  green: "#bdff51",
};

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  width: 94%;
  height: 6%;
  align-self: center;
  background-color: #4b4747;
  margin-top: 1%;
`;

export const Priority = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background-color: ${colors.green}; 
    margin-top: 0.75%;
    margin-left: 1%;
`;

export const Title = styled.h3`
  color: #A3A1A1;
  font-family: sans-serif;
  margin-top: 0.5%;
  margin-left: 1%;
`;

export const Description = styled.h4`
  color: white;
  font-family: sans-serif;
  margin-top: 0.6%;
  margin-left: 4%;
  font-weight: 400;
`;

export const Spacer = styled.div`
  background-color: #9b9b9b;
  width: 0.2%;
  height: 100%;
  margin-left: 5%;
`;

export const TitleMid = styled.h3`
  color: #A3A1A1;
  font-family: sans-serif;
  margin-top: 0.5%;
  margin-left: 4%;
`;

export const ChosenItem = styled.div`
  width: 16%;
  height: 80%;
  margin-top: 0.3%;
  background-color: #a3a1a1;
  margin-left: 10px;
  border-radius: 6px;
  text-align: center;
`;


export const ListItem = styled.div`
  width: 100%;
  height: 10%;
  background-color: #a3a1a1;
  margin-left: 0px;
  text-align: center;
  flex: 1;
  :hover {
    background-color: #717171;
  }
`;
export const ChoosingList = styled.div`
  width: 16%;
  height: ${(props)=>((props.list.length*100)+'%')};
  overflow: auto;
  background-color: #a3a1a1;
  margin-left: -16%;
  margin-top: 3.5%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-style: solid;
  border-width: 3px;
  border-color: black
  z-index: 3;
`;

export const ListSpacer = styled.div`
  width: 80%;
  height: 2%;
  align-self: center;
  background-color: #4b4747;
`;

export const ListDescription = styled.h2`
  
`
