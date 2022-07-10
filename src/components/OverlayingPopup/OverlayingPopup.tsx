import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';
import { useLockedBody } from '../../hooks/useLockedBody';
import { Portal } from '../Portal/Portal';


const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    /* padding: 36px; */
    padding: 5vw;

    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
       padding: 0;
    }

`

const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
`

interface OverlayingPopupProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
}

export const OverlayingPopup: FC<OverlayingPopupProps> = ({ children, onClose, isOpened }) => {
    
    useLockedBody(isOpened)

    if (!isOpened) {
        return null
    }

    return (
        <Portal>
            <StyledContainer>
                <StyledOverlay
                    onClick={onClose}
                />
                    {children}
            </StyledContainer>
        </Portal>
    )
}
