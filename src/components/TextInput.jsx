import React from "react";
import styled from 'styled-components'

const TextInput = ({
  onTextChange,
  value,
  onEnterPress,
  width,
  ...props
}) => {
  return (
    <StyledInput 
      placeholder="Ex: Pikachu"
      onChange={(e) => onTextChange(e.target.value)}
      value={value}
      onKeyDown={(e) => e.key === 'Enter' && onEnterPress()}
      type="text"
      width={width || '100%'}
      {...props}
    >
    </StyledInput>
  )
}

const StyledInput = styled.input`
  transition: 100ms;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  height: 37px;
  width: ${({width}) => width}};
  padding: 0px 15px;
  font-family: 'Montserrat';

  &:focus-visible {
    outline: none;
  }
`

export default TextInput