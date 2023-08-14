import styled from "styled-components";


const styles = {
    navItem: {
      width: 'calc(var(--nav-size) * 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all'
    },
    iconButton: {
      width: 'calc(var(--nav-size) * 0.5)',
      height: 'calc(var(--nav-size) * 0.5)',
      backgroundColor: '#484a4d',
      borderRadius: '50%',
      padding: '5px',
      margin: '2px 6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'filter 0.2s'
      // Hover effect will be handled dynamically (shown below)
    },
    svg: {
      fill: 'var(--text-color)',
      width: '20px',
      height: '20px'
    }
  };
  
  export default styles;