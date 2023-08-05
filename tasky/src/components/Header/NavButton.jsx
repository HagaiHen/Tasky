import React from 'react'
import { NavButtonContainer, SelectedGreenBar, HeaderTitle } from './styles'

const NavButton = (props) => {
  return (
    <NavButtonContainer active={props.active} onClick={props.onClick}>
        <HeaderTitle>{props.title}</HeaderTitle>
        {props.active && <SelectedGreenBar />}
    </NavButtonContainer>
  )
}

export default NavButton