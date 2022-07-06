import { ComponentPropsWithoutRef, FC } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { calcAdaptiveValue } from '../../styles/helpers';
import { screenWidth, spacing } from '../../styles/styles';

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
    ${calcAdaptiveValue('padding', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
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

