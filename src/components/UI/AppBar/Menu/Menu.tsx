import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { useLockedBody } from '../../../../hooks/useLockedBody';
import { screenWidth } from '../../../../styles/styles';
import { PageContainer } from '../../PageContainer/PageContainer';

import * as Styled from './Menu.styled'

interface Item {
    name: string;
    href: string;
}

interface MenuProps extends ComponentPropsWithoutRef<'ul'> {
    items: Item[];
    positionTop?: number;
    isMobile: boolean;
    open: boolean;
}

export const Menu: FC<MenuProps> = ({ items, isMobile, positionTop, open }) => {
    const isBodyLocked = isMobile && open

    useLockedBody(isBodyLocked)
    console.log(positionTop);
    
    return (
        <Styled.Menu positionTop={positionTop} open={open} isMobile={isMobile}>
            <Styled.Nav isMobile={isMobile}>
                <Styled.Ul isMobile={isMobile}>
                    {items?.map((item, index) =>
                        <li key={index}>
                            <Styled.Anchor isMobile={isMobile} href={item.href}>{item.name}</Styled.Anchor>
                        </li>
                    )}
                </Styled.Ul>
            </Styled.Nav>
        </Styled.Menu>
    )
}