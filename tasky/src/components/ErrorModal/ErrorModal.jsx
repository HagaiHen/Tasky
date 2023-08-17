import React, {useState} from 'react'
import { ErrorModalStyled, Title, Description, CloseModalButton, ButtonTitle } from './styles'

// props: isOpen (boolean), errorMessage (string)
const ErrorModal = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  useState(()=>{
    setIsOpen(props.isOpen);
  },[props.isOpen])
  console.log('is open = ', isOpen)
  return (
    <ErrorModalStyled isOpen={isOpen}>
        <Title>Error !</Title>
        <Description>{props.errorMessage}</Description>
        <CloseModalButton onClick={()=>{
            setIsOpen(false);
        }}>
            <ButtonTitle>OK</ButtonTitle>
        </CloseModalButton>
    </ErrorModalStyled>
  )
}

export default ErrorModal