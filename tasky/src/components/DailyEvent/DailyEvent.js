import React, { useState } from "react";
import {EventContainer, Title} from './styles'


const DailyEvent = (props) => {

    return (
        <EventContainer>
            <Title>{props.description}</Title>
        </EventContainer>
    );
}

export default DailyEvent;