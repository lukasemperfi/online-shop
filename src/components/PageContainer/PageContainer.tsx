import { ComponentPropsWithoutRef, FC } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { calcAdaptiveValue } from '../../styles/helpers';
import { Breakpoints, screenWidth, spacing } from '../../styles/styles';

interface PageContainerProps extends ComponentPropsWithoutRef<'div'> {
    maxWidth?: string;
    containerStyles?: FlattenSimpleInterpolation;
}

interface ContainerProps {
    maxWidth?: string;
    containerStyles?: FlattenSimpleInterpolation;
}

export const Container = styled.div<ContainerProps>`
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '1200px'};
    margin: 0 auto;
    overflow: hidden;
    /* ${calcAdaptiveValue('padding', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)} */
    
    @media (min-width: ${Breakpoints.xs}) {
        padding: 10px;
    }

    @media (min-width: ${Breakpoints.lg}) {
        padding: 20px;
    }
   
   ${({ containerStyles }) => containerStyles}
`

export const PageContainer: FC<PageContainerProps> = ({ children, maxWidth, containerStyles }) => {
    return (
        <Container
            maxWidth={maxWidth}
            containerStyles={containerStyles}
        >
            {children}
        </Container>
    )
}

