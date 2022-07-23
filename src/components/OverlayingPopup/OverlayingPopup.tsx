import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';
import { useLockedBody } from '../../hooks/useLockedBody';
import { Breakpoints } from '../../styles/styles';
import { OverlayWithLockedBody } from '../OverlayWithLockedBody/OverlayWithLockedBody';
import { Portal } from '../Portal/Portal';


const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center; 

    @media (min-width: ${Breakpoints.lg}) {
       padding: 5vw;
    }

`

interface OverlayingPopupProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
}

export const OverlayingPopup: FC<OverlayingPopupProps> = ({ children, onClose, isOpened }) => {

    if (!isOpened) {
        return null
    }

    return (
        <Portal>
            <StyledContainer>
                <OverlayWithLockedBody isOpened={isOpened} onClick={onClose} backgroundColor={'rgba(0, 0, 0, 0.6)'}/>
                    {children}
            </StyledContainer>
        </Portal>
    )
}
