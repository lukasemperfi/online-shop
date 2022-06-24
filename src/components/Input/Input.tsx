import { ComponentPropsWithoutRef, FC } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../styles/styles';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string,
  errorText?: string,
  containerStyle?: FlattenSimpleInterpolation,
}

interface ErrorProps {
  errorText?: string,
}

interface ContainerProps {
  containerStyle?: FlattenSimpleInterpolation
}

const Container = styled.div<ContainerProps>`
    ${({ containerStyle }) => containerStyle}
`

const StyledInput = styled.input<ErrorProps>`
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 48px 12px 20px;
    color: ${colors.primary};
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    margin-bottom: 5px;
    margin-top: 10px;
    ${({errorText}) => errorText &&  `box-shadow: 0 0 15px ${colors.error};`}
    &:focus {
      ${({errorText}) => !errorText &&  `box-shadow: 0 0 15px ${colors.focus};`}
    }
`
const StyledLabel = styled.label`
    display: block;
    color: ${colors.primary};
    font-weight: 500;
    line-height: 1;
    font-size: inherit;
    letter-spacing: 0.2em;
`
const Error = styled.div<ErrorProps>`
  color: ${colors.error};
  font-size: inherit;
  display: ${({ errorText }) => errorText ? 'block' : 'none'};
`

export const Input: FC<InputProps> = (
  {
    label,
    containerStyle,
    errorText,
    ...inputProperties
  }) => (
  <Container containerStyle={containerStyle}>
    <StyledLabel>
      {label}
      <StyledInput {...inputProperties} errorText={errorText} />
    </StyledLabel>
    <Error errorText={errorText}>{errorText}</Error>
  </Container>
)