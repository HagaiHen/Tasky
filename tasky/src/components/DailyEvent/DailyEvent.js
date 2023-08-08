import React, { useState } from "react";
import {EventContainer, Title, TitleHour} from './styles'


const DailyEvent = (props) => {
    return (
        <EventContainer>
            <TitleHour>{props.Hour}</TitleHour>
            <Title>{props.Description}</Title>
        </EventContainer>
    );
}

export default DailyEvent;