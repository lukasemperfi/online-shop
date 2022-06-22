import { ComponentPropsWithoutRef, FC } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string,
  errorText?: string,
  wrapperStyle?: FlattenSimpleInterpolation,
}

interface ErrorProps {
  errorText?: string,
}

const StyledInput = styled.input`
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 48px 12px 20px;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    margin-bottom: 5px;
    &:focus {
      box-shadow: 0 0 15px #4285f4;
    }
`
const StyledLabel = styled.label`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 10px;
`
const Error = styled.div<ErrorProps>`
  color: #f93c00;
  display: ${({ errorText }) => errorText ? 'block' : 'none'};
`

export const Input: FC<InputProps> = (
  {
    label,
    wrapperStyle,
    errorText,
    ...inputProperties
  }) => (
  <div>
    <StyledLabel>
      {label}
    </StyledLabel>
    <StyledInput {...inputProperties} />
    <Error errorText={errorText}>{errorText}</Error>
  </div>
)