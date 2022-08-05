import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { Breakpoints } from '../../styles/styles';

interface ContainerProps {
    maxWidth?: string;
    containerStyles?: FlattenSimpleInterpolation;
}

export const Container = styled.div<ContainerProps>`
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '1200px'};
    margin: 0 auto;
    overflow: hidden;
    
    @media (min-width: ${Breakpoints.xs}) {
        padding: 10px;
    }

    @media (min-width: ${Breakpoints.lg}) {
        padding: 20px;
    }
   
   ${({ containerStyles }) => containerStyles}
`
