import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

import * as Styled from './MenuList.styled'

interface Item {
    name: string;
    href: string;
}

interface MenuListProps extends ComponentPropsWithoutRef<'ul'> {
    items: Item[];
    positionTop?: number;
    isMobile: boolean;
    styles?: FlattenSimpleInterpolation;
}

export const MenuList: FC<MenuListProps> = ({ items, isMobile, positionTop, styles }) =>
    <Styled.Nav positionTop={positionTop} styles={styles} isMobile={isMobile}>
        <Styled.Ul isMobile={isMobile}>
            {items?.map((item, index) =>
                <li key={index}>
                    <Styled.Anchor isMobile={isMobile} href={item.href}>{item.name}</Styled.Anchor>
                </li>
            )}
        </Styled.Ul>
    </Styled.Nav>


