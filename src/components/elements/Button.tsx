import React from 'react';
import styled from 'styled-components';

export const Button = ({
  text,
  type,
  ...props
}: { text: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton type={type} {...props}>
    {text}
  </StyledButton>
);

const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  width: 100px;
  height: 50px;
  font-size: 1em;
  cursor: pointer;
  box-shadow: none;
  color: #fff;
  background: ${({ theme }) => theme.mainColor};
  margin-top: 4rem;
  margin-left: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
    transition: all 0.2s linear;
  }
`;
