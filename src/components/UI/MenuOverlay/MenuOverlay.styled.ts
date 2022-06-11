import styled, { FlattenSimpleInterpolation } from 'styled-components'

interface OverlayProps {
    paddingTop?: number;
    styles?: FlattenSimpleInterpolation;
}

export const Overlay = styled.div<OverlayProps>`
    background-color: red;
    height: 100vh;
    width: 50vw;
    padding: ${({ paddingTop }) => paddingTop ? paddingTop + 'px' : '20px'} 20px 20px 20px;
    @media (max-width: 576px) {
        width: 100vw;
    }
    ${({ styles }) => styles}
`