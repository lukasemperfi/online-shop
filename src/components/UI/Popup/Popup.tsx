import React, { FC, ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import { Portal } from '../Portal/Portal';

interface PopupProps {
  children?: ReactNode;
  onClose?: () => void;
  isOpened: boolean;
}


const StyledPopup = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: white;
`

const StyledOverlay = styled.div`
    background-color: blue;
    height: 100%;
    width: 100%;
`

const StyledContent = styled.div`
    display: inline-flex;
    background-color: yellow;
`

export const Popup: FC<PopupProps> = ({ children, onClose, isOpened }) => {

  if (!isOpened) {
    return null
  }

  return (
    <Portal>
      <StyledPopup>
          {children}
      </StyledPopup>
    </Portal>
  )
}
