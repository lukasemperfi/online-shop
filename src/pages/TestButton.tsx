import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styled from 'styled-components'

type Colors = 'primary' | 'secondary' 

interface StyledButton {
    colorTest?: Colors,
}

const buttonColors = {
    primary: '#000000',
    secondary: 'red'
}


const StyledButton = styled.button<StyledButton>`
    background-color: ${ ({colorTest}) => colorTest && buttonColors[colorTest]};

`
interface TestButtonProps extends ComponentPropsWithoutRef<'button'> {
    buttonColor?: Colors,
}


export const TestButton: FC<TestButtonProps> = ({buttonColor, children, ...buttonRestProps}) => {

  return (
    <StyledButton  colorTest={buttonColor} {...buttonRestProps}>{children}</StyledButton>
  )
}
