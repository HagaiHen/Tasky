import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 10px;
    padding: 10px;
  overflow-y: auto; /* Use "auto" instead of "scroll" for auto-scroll behavior */
  scroll-behavior: smooth;
  display: grid;
  grid-auto-flow: row; /* Make it flow horizontally */
  justify-content: center;
  z-index: 3;
`;