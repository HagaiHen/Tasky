import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #4b4747;
  flex: 1;
  border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const ContainerRaw = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #4b4747;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const MidContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const DataBox = styled.div`
  width: 200px;
  height: 150px;
  background-color: #e1e1e1;
  border-radius: 8px;
  padding: 16px;
  margin-right: 10px;
  margin-left: 10px;
`;

