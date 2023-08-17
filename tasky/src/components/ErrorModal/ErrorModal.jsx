import React, {useState} from 'react'
import { ErrorModalStyled, Title, Description, CloseModalButton, ButtonTitle } from './styles'

// props: isOpen (boolean), errorMessage (string)
const ErrorModal = (props) => {
  
  const [isOpen, setIsOpen] = useState(props.isOpen);
  
  useState(()=>{
    setIsOpen(props.isOpen);
  },[props.isOpen])
  
  const handleExit = (() => {
    props.setError(!props.isOpen);
  });
  
  return (
    <ErrorModalStyled isOpen={props.isOpen}>
        <Title>Error !</Title>
        <Description>{props.errorMessage}</Description>
        <CloseModalButton onClick={()=>{
            setIsOpen(false);
        }}>
            <ButtonTitle onClick={handleExit}>OK</ButtonTitle>
        </CloseModalButton>
    </ErrorModalStyled>
  )
}

export default ErrorModal