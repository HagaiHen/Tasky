import React from 'react'
import { EventModalStyled } from './styles'
import CreateEventPopup from './EventPopup'

export const EventModal = (props) => {
  return (
    <EventModalStyled isOpen={props.isOpen}>
        <CreateEventPopup toggleModal={props.toggleModal} user={props.user} uid={props.uid}/>
    </EventModalStyled>
  )
}

