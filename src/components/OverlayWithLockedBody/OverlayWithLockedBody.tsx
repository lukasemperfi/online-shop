import React, { FC } from 'react'
import styled from 'styled-components'
import { useLockedBody } from '../../hooks/useLockedBody'

interface OverlayWithLockedBodyProps {
    isOpened: boolean;
    onClick: () => void;
    backgroundColor?: string;
}

const StyledOverlay = styled.div<OverlayWithLockedBodyProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'transparent'};
`

export const OverlayWithLockedBody: FC<OverlayWithLockedBodyProps> = ({isOpened, onClick, backgroundColor}) => {

    useLockedBody(isOpened)
    
    return (
        <StyledOverlay isOpened={isOpened} onClick={onClick} backgroundColor={backgroundColor}/>
    )
}
