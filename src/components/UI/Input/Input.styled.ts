import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { Colors } from '../../../styles/styles';

interface StyledInputProps {
  errorText?: string,
  inputStyle?: FlattenSimpleInterpolation,
}

interface ContainerProps {
  containerStyle?: FlattenSimpleInterpolation
}

export const Container = styled.div<ContainerProps>`
      ${({ containerStyle }) => containerStyle}
`

export const Input = styled.input<StyledInputProps>`
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
      padding: 12px 48px 12px 20px;
  
      ${({ errorText }) => errorText && `box-shadow: 0 0 15px ${Colors.error};`}
  
      &:focus {
        ${({ errorText }) => !errorText && `box-shadow: 0 0 15px ${Colors.focus};`}
      }
  
      ${({ inputStyle }) => inputStyle}
`

export const Label = styled.label`
      display: block;
      color: ${Colors.primary};
      font-weight: 500;
      line-height: 1;
      font-size: inherit;
      margin-bottom: 5px;
`

export const Error = styled.div<StyledInputProps>`
    color: ${Colors.error};
    font-size: inherit;
    display: ${({ errorText }) => errorText ? 'block' : 'none'};
    margin-top: 10px;
`
