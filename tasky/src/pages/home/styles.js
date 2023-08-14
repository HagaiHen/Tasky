import styled from "styled-components";

export const RecentProjectsContainer = styled.div`
  background-color: #4b4747;
  width: 100%;
  height: 100%;
  overflow-x: auto; /* Use "auto" instead of "scroll" for auto-scroll behavior */
  scroll-behavior: smooth;
  display: grid;
  grid-auto-flow: column; /* Make it flow horizontally */
`;

export const TitleContainer = styled.div`
  padding-left: 1rem;
  color: white;
  font-family: sans-serif;
  margin-right: 50%;
`;