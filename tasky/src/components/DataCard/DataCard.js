import React from 'react'
import { ClosedCardContainer, Info, InfoContainer, OpenedCardContainer, TextContainer, Title } from './styles'
import Image from 'next/image'

const DataCard = (props) => {
    if(props.open){
         return (
            <OpenedCardContainer>
                <TextContainer>
                    <Title>{`${props.project} - Sprint ${props.sprint}`}</Title>
                    <InfoContainer>
                    <Info>{`Start: ${props.start}`}</Info>
                    <Info>{`End: ${props.end}`}</Info>
                    </InfoContainer>
                </TextContainer>
                <Image
                    src={"./RightArrow.svg"}
                    width={9}
                    height={18}
                    style={{ marginLeft: 80, marginTop: "15%" }}
                />
            </OpenedCardContainer>
         )
    }else{
        return (
          <ClosedCardContainer onClick={()=>{props.onClick(props.sprint)}}>
            <TextContainer>
              <Title>{`${props.project} - Sprint ${props.sprint}`}</Title>
            </TextContainer>
            <Image
              src={"./DownArrow.svg"}
              width={9}
              height={18}
              style={{ marginLeft: 80, marginTop: "3%" }}
            />
          </ClosedCardContainer>
        );
    }
}

export default DataCard