import React, { ComponentPropsWithoutRef, FC } from 'react'
import styled from 'styled-components';
import { calcAdaptiveValue } from '../../../styles/helpers';
import { screenWidth, spacing } from '../../../styles/styles';

interface PageContainerProps extends ComponentPropsWithoutRef<'div'> {
    maxWidth: string;
}

interface ContainerProps {
    maxWidth: string;
}

export const Container = styled.div<ContainerProps>`
    max-width: ${({maxWidth}) => maxWidth };
    margin: 0 auto;
    ${calcAdaptiveValue('padding-left', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
    ${calcAdaptiveValue('padding-right', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
`

export const PageContainer: FC<PageContainerProps> = ({ children, maxWidth }) => {
    return (
        <Container maxWidth={maxWidth}>{children}</Container>
    )
}

