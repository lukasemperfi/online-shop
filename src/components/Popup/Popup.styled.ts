import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface OverlayProps {
    open?: boolean | null;
    styles?: FlattenSimpleInterpolation;
}

interface ContentContainerProps {
    styles?: FlattenSimpleInterpolation;
}

export const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
`

export const Overlay = styled.div<OverlayProps>`
    width: 100%;
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    padding: 5vw;
    ${({ styles }) => styles}
    @media (max-width: 600px) {
       padding: 0;
    }
`;

export const ContentContainer = styled.div<ContentContainerProps>`
    background: white;
    border-radius: 4px;
    overflow: auto;
    max-height: 100%;
    background-color: green;
    @media (max-width: 600px) {
       width: 100%;
       height: 100%;
       border-radius: 0px;
    }
    ${({ styles }) => styles}
`;
