import { ComponentPropsWithoutRef, FC, forwardRef } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';
import * as Styled from './Input.styled'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string,
  errorText?: string,
  containerStyle?: FlattenSimpleInterpolation,
  inputStyle?: FlattenSimpleInterpolation,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    containerStyle,
    inputStyle,
    errorText,
    ...inputProperties
  }, ref) => {
    return (
      <Styled.Container containerStyle={containerStyle}>
        {label
          ?
          <Styled.Label>
            {label}
          </Styled.Label>
          :
          null}
        <Styled.Input
          errorText={errorText}
          inputStyle={inputStyle}
          ref={ref}
          {...inputProperties}
        />
        {errorText
          ?
          <Styled.Error errorText={errorText}>
            {errorText}
          </Styled.Error>
          :
          null}
      </Styled.Container>
    )
  })