import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  /* width: 100%; */
  height: 100%;
  background-color: #4b4747;
`;

export const ContainerRaw = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  height: 100%;
`;

export const CalContainer = styled.div`
  border: 1px solid black;
  background-color: rgb(226 232 240);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* margin-right: 10px; */
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TasksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* position: absolute;  */
  border: 1px solid black;
  background-color: grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #4b4747;
  /* width: 100%; */
  height: 100%;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
`;

export const MidContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DataBox = styled.div`
  width: 200px;
  height: 150px;
  background-color: #e1e1e1;
  border-radius: 8px;
  padding: 16px;
`;

export const LeftContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 20%;
  height: 80%;
  margin-top: 20px;
  background-color: #e1e1e1;
  border-radius: 20px; /* Adjust the value for the desired level of roundness */
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1); /* Add shadow with x-offset, y-offset, blur, and color */
  left: 20px;

`;

export const RightContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 70%;
  height: 80%;
  margin-top: 20px;
  background-color: #e1e1e1;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  right: 20px; /* Adjust the value to move it to the right */
  // left: auto; /* Reset the left property to its default value */

  /* Add any additional styles or customizations here */
`;