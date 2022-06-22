import React, { ComponentPropsWithoutRef, FC } from 'react'
import styled from 'styled-components';
import { calcAdaptiveValue, calcAdaptiveValue2, calcAdaptiveValue3 } from '../../styles/helpers';
import { mediaQuery, screenWidth, spacing } from '../../styles/styles';

interface PageContainerProps extends ComponentPropsWithoutRef<'div'> {
    maxWidth: string;
}

interface ContainerProps {
    maxWidth: string;
}

export const Container = styled.div<ContainerProps>`
    max-width: ${({maxWidth}) => maxWidth };
    margin: 0 auto;
    /* ${calcAdaptiveValue('padding-left', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
    ${calcAdaptiveValue('padding-right', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)} */
    /* ${calcAdaptiveValue2('padding', 10, 20, 320, 1200)} */
    padding: 0px ${spacing.desktop};
    @media (max-width: 1200px) {
        padding: 0px ${calcAdaptiveValue3(spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)};
    }
`

export const PageContainer: FC<PageContainerProps> = ({ children, maxWidth }) => {
    return (
        <Container maxWidth={maxWidth}>{children}</Container>
    )
}

