import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface OverlayProps {
    open?: boolean | null;
    styles?: FlattenSimpleInterpolation;
}

interface ContentContainerProps {
    styles?: FlattenSimpleInterpolation;
}

export const Overlay = styled.div<OverlayProps>`
    display: ${({ open }) => open ? 'flex' : 'none'};
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: flex-start;
    ${({ styles }) => styles}
`;

export const ContentContainer = styled.div<ContentContainerProps>`
    padding: 3vw;
    background: white;
    border-radius: 4px;
    width: 250px;
    overflow: auto;
    max-height: 90vh;
    margin:5vw;
    ${({ styles }) => styles}
`;
