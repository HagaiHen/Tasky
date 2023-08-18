import styled from "styled-components";

export const RecentProjectsContainer = styled.div`
  background-color: #4b4747;
  width: 100%;
  height: 45%;
  overflow-x: auto; /* Use "auto" instead of "scroll" for auto-scroll behavior */
  scroll-behavior: smooth;
  display: grid;
  grid-auto-flow: column; /* Make it flow horizontally */
  justify-content: start;
`;

export const TitleContainer = styled.div`
  padding-left: 1rem;
  color: white;
  font-family: sans-serif;
  margin-right: 50%;
`;

export const Title = styled.h1`
  margin-top: 1%;
  margin-left: 20px;
  font-family: sans-serif;
`;

export const ContactContainer = styled.div`
  background-color: #4b4747;
  width: 100%;
  height: 100%;
  overflow-x: auto; /* Use "auto" instead of "scroll" for auto-scroll behavior */
  scroll-behavior: smooth;
  display: grid;
  grid-auto-flow: column; /* Make it flow horizontally */
  justify-content: start;
  padding-left: 5rem;
`;