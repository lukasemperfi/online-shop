import { ComponentPropsWithoutRef, FC, forwardRef } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './FileInput.styled'

interface FileInputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string,
  errorText?: string,
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({
    label,
    errorText,
    ...inputProperties
  }, ref) => {
    return (
      <div>
        {label
          ?
          <Styled.Label>
            {label}
          </Styled.Label>
          :
          null}
        <input
          ref={ref}
          {...inputProperties}
          type='file'
        />
        {errorText
          ?
          <Styled.Error errorText={errorText}>
            {errorText}
          </Styled.Error>
          :
          null}
      </div>
    )
  })