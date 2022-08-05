import styled from 'styled-components';

import { Colors } from '../../../styles/styles';

interface StyledInputProps {
    errorText?: string,
  }
  
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
