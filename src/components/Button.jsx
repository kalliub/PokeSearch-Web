/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";

const Button = ({ onClick, disabled, ...props }) => {
  return (
    <StyledButton
      onClick={disabled ? false : onClick}
      disabled={disabled}
      {...props}
      style={{
        ...props.style,
        backgroundColor: disabled ? "#ffeba3" : "#ffd131",
        cursor: disabled ? "default" : "pointer",
      }}
    />
  );
};

const StyledButton = styled.button`
  transition: 200ms;
  border-radius: 5px;
  color: black;
  padding: 10px;
  min-width: 10px;
  height: 38px;
  border: transparent;
  line-height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export default Button;
