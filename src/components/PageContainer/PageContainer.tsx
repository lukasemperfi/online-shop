import { ComponentPropsWithoutRef, FC } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './PageContainer.styled';

interface PageContainerProps extends ComponentPropsWithoutRef<'div'> {
    maxWidth?: string;
    containerStyles?: FlattenSimpleInterpolation;
}

export const PageContainer: FC<PageContainerProps> = ({
    children,
    maxWidth,
    containerStyles
}) =>
    <Styled.Container
        maxWidth={maxWidth}
        containerStyles={containerStyles}
    >
        {children}
    </Styled.Container>
