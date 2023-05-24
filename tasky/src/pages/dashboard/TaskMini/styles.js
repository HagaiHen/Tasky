import styled from "styled-components";
import Modal from "styled-react-modal";

const colors = {
  red: "#f87777",
  yellow: "#f8d96c",
  green: "#bdff51",
};

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  /* width: 95%;
   */
  width: 280px;
  height: 40px;
  align-self: center;
  background-color: #4b4747;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const Priority = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100px;
  background-color: ${(props) => colors[props.color]};
  margin-left: 10px;
`;

export const Title = styled.h3`
  color: #a3a1a1;
  font-family: sans-serif;
  font-size: 10px;
  margin-left: 10px;
`;

export const Description = styled.h4.attrs((props) => ({
  size: props.size,
}))`
  color: white;
  font-family: sans-serif;
  font-weight: 400;
`;

export const Spacer = styled.div`
  background-color: #9b9b9b;
  width: 2px;
  height: 100%;
`;

export const TitleMid = styled.h3`
  color: black;
  font-family: sans-serif;
  margin-top: 5%;
  display: flex;
  justify-content: center;
`;

export const ChosenItem = styled.div`
  width: 150px;
  height: 10px;
  background-color: #a3a1a1;
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
  height: ${(props) => props.list.length * 100 + "%"};
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
export const DescriptionContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
`;
export const Selected = styled.div`
  background-color: #a3a1a1;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
`;

export const StatusText = styled.h4`
  color: white;
  font-family: sans-serif;
  font-size: 10px;
`;

