import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as Styled from './MenuList.styled'

interface MenuListProps extends ComponentPropsWithoutRef<'ul'> {
    items: String[];
    href: string;
    horizontal?: boolean;
}

export const MenuList: FC<MenuListProps> = ({ items, horizontal, href }) =>
    <Styled.Ul horizontal={horizontal}>
        {items?.map((name, index) =>
            <li key={index}>
                <Styled.Anchor href={href} horizontal={horizontal}>{name}</Styled.Anchor>
            </li>
        )}
    </Styled.Ul>
