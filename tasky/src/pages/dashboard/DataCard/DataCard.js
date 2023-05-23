import React from 'react'
import { ClosedCardContainer, Info, InfoContainer, OpenedCardContainer, TextContainer, Title } from './styles'
import Image from 'next/image'

const DataCard = (props) => {
    if(props.open){
         return !props.isBacklog ? (
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
               style={{ marginLeft: 80 }}
             />
           </OpenedCardContainer>
         ) : (
           <OpenedCardContainer>
             <TextContainer>
               <Title>{`Projects`}</Title>
             </TextContainer>
             <Image
               src={"./RightArrow.svg"}
               width={9}
               height={18}
               style={{ marginLeft: 80 }}
             />
           </OpenedCardContainer>
         );
    }else{
        return !props.isBacklog ? (
          <ClosedCardContainer
            onClick={() => {
              props.onClick(props.sprint);
            }}
          >
            <TextContainer>
              <Title>{`${props.project} - Sprint ${props.sprint}`}</Title>
            </TextContainer>
            <Image src={"./DownArrow.svg"} width={12} height={21} />
          </ClosedCardContainer>
        ) : (
          <ClosedCardContainer
            onClick={() => {
              props.onClick(props.sprint);
            }}
          >
            <TextContainer>
              <Title>{`Projects`}</Title>
            </TextContainer>
            <Image src={"./DownArrow.svg"} width={12} height={21} />
          </ClosedCardContainer>
        );
    }
}

export default DataCard