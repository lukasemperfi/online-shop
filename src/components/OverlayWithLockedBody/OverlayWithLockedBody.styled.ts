import styled from 'styled-components';

interface OverlayProps {
    backgroundColor?: string;
}

export const Overlay = styled.div<OverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'transparent'};
`
