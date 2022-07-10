import React, { FC, ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { OverlayingPopup } from '../OverlayingPopup/OverlayingPopup';

interface StyledContainerProps {
    containerStyles?: FlattenSimpleInterpolation;
}

const StyledContainer = styled.div<StyledContainerProps>`
    background-color: #f8f8f8;
    width: 440px;
    max-height: 100%;
    overflow: auto;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); 

    z-index: 1;

    ${({containerStyles}) => containerStyles}
`

interface MainPopupProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
    containerStyles?: FlattenSimpleInterpolation;
}

export const MainPopup: FC<MainPopupProps> = ({ children, onClose, isOpened, containerStyles }) => {
    return (
        <OverlayingPopup isOpened={isOpened} onClose={onClose}>
            <StyledContainer containerStyles={containerStyles}>
                {children}
            </StyledContainer>
        </OverlayingPopup>
    )
}
