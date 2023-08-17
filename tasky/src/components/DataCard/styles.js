import styled from "styled-components";

export const ClosedCardContainer = styled.button`
  border-radius: 24px;
  background-color: #d9d9d9; 
  height: 5%;
  width: 80%;
  border-style: solid;
  border-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  :hover{
    cursor: pointer;
    background-color: #999999;
  }
`;


export const OpenedCardContainer = styled.button`
  border-radius: 24px;
  background-color: #d9d9d9;
  height: 15%;
  width: 84%;
  border-style: solid;
  border-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  padding-right: 10px;
`;


export const Title = styled.h2`
  color: black;
  margin-top: 3%;
  margin-left: 7px;
  font-family: sans-serif;
`;

export const Info = styled.text`
  color: black;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 11px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    margin-left: 10px;
`