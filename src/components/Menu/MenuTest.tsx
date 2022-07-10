import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { useLockedBody } from '../../hooks/useLockedBody';
import { screenWidth } from '../../styles/styles';
import { MenuList } from '../MenuList/MenuList';
import { PageContainer } from '../PageContainer/PageContainer';
import { StyledProps } from './models/StyledProps';

import * as Styled from './MenuTest.styled'
import * as styles from './styles'

interface MenuTestProps<T> {
    data: T[];
    renderItem: (item: T) => ReactNode;
    isMobile: boolean;
    positionTop: number;
    isOpen: boolean;
}

export const MenuTest = <T,>({ data, renderItem, isMobile,  positionTop, isOpen }: MenuTestProps<T>) => {
    const isBodyLocked = isMobile && isOpen

    useLockedBody(isBodyLocked)

    return (
        <Styled.Container isMobile={isMobile} positionTop={positionTop} isOpen={isOpen}>
            <PageContainer containerStyles={!isMobile ? styles.desktopPageContainerStyle : undefined}>
                <Styled.Nav isMobile={isMobile} isOpen={isOpen}>
                    <MenuList
                        data={data}
                        renderItem={renderItem}
                        containerStyle={isMobile ? styles.mobileMenuListContainerStyle : styles.desktopMenuListContainerStyle}
                    />
                </Styled.Nav>
            </PageContainer>
        </Styled.Container>
    )
}