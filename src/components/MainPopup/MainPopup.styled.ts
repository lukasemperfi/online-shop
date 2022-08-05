import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { Breakpoints } from '../../styles/styles';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

interface ContainerProps {
    containerStyles?: FlattenSimpleInterpolation;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    z-index: 1;
    background-color: #f8f8f8;
    height: 100%;
    border-radius: 0;
    width: 100%;   
    overflow: auto; 

    @media (min-width: ${Breakpoints.lg}) {
        width: 440px;
        height: auto;
        max-height: 100%;
        border-radius: 16px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); 
    }

    ${({ containerStyles }) => containerStyles}
`

export const CloseIconAbsolutePos = styled(CloseIcon)`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 1;
`
