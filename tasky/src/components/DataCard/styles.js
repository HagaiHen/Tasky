import styled from "styled-components";

export const ClosedCardContainer = styled.button`
  border-radius: 24px;
  background-color: #d9d9d9; 
  height: 5%;
  width: 80%;
  border-style: solid;
  border-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
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
  margin-top: 5%;
`;


export const Title = styled.h2`
  color: black;
  margin-top: 3%;
  font-family: sans-serif;
`;

export const Info = styled.h4`
  color: black;
  margin-top: -10%; 
  font-family: sans-serif;
  margin-right: 25%;
  font-weight: 400;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column; 
    margin-top: 30%;
`