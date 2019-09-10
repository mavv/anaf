import React, { ReactEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  htmlType?: string;
}

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  flex-shrink: 0;
  padding: ${props => props.theme.spacing(1)} ${props =>
  props.theme.spacing(3)};
  font-weight: 700;
  background-color: white;
  color: ${props => props.theme.button.primary};
  border: 2px solid ${props => props.theme.button.primary};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.button.primary};
    color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    translateY(1px);
  }

  max-width: 300px;
`;

const Button: React.FC<ButtonProps> = props => <StyledButton {...props} />;

export default Button;
