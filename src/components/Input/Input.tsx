import { ComponentPropsWithoutRef, FC } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Colors } from '../../styles/styles';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string,
  errorText?: string,
  containerStyle?: FlattenSimpleInterpolation,
  inputStyle?: FlattenSimpleInterpolation,
}

interface StyledInputProps {
  errorText?: string,
  inputStyle?: FlattenSimpleInterpolation,
}

interface ContainerProps {
  containerStyle?: FlattenSimpleInterpolation
}

const Container = styled.div<ContainerProps>`
    ${({ containerStyle }) => containerStyle}
`

const StyledInput = styled.input<StyledInputProps>`
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    color: ${Colors.primary};
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    ${({ errorText }) => errorText && `box-shadow: 0 0 15px ${Colors.error};`}

    &:focus {
      ${({ errorText }) => !errorText && `box-shadow: 0 0 15px ${Colors.focus};`}
    }

    ${({ inputStyle }) => inputStyle}
`
const StyledLabel = styled.label`
    display: block;
    color: ${Colors.primary};
    font-weight: 500;
    line-height: 1;
    font-size: inherit;
    letter-spacing: 0.2em;
    margin-bottom: 5px;
`
const Error = styled.div<StyledInputProps>`
  color: ${Colors.error};
  font-size: inherit;
  display: ${({ errorText }) => errorText ? 'block' : 'none'};
  margin-top: 10px;
`

export const Input: FC<InputProps> = (
  {
    label,
    containerStyle,
    inputStyle,
    errorText,
    ...inputProperties
  }) => {
  return (
    <Container containerStyle={containerStyle}>
      {label
        ?
        <StyledLabel>
          {label}
        </StyledLabel>
        :
        null}
      <StyledInput
        errorText={errorText}
        inputStyle={inputStyle}
        {...inputProperties}
      />
      {errorText
        ?
        <Error errorText={errorText}>
          {errorText}
        </Error>
        :
        null}
    </Container>
  )
}