import styled from "styled-components";

export const CustomDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2.5rem;
`;

export const cardStyles = {
  width: 300,
  height: 200,
  margin: 2,
  backgroundColor: 'transparent', // Set the background to be transparent
  position: 'relative', // Add this to create a stacking context
};

export const contentStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '16px', // Adjust this padding as needed
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Less white, more transparent
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};