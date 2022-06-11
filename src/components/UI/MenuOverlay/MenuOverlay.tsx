import { ComponentPropsWithoutRef, FC } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './MenuOverlay.styled'

interface MenuOverlayProps extends ComponentPropsWithoutRef<'div'> {
    paddingTop?: number;
    styles?: FlattenSimpleInterpolation;
}

export const MenuOverlay: FC<MenuOverlayProps> = ({ children, paddingTop, styles }) =>
    <Styled.Overlay paddingTop={paddingTop} styles={styles}>
        {children}
    </Styled.Overlay>
