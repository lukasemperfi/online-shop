import { ReactNode } from 'react'

import { useLockedBody } from '../../hooks/useLockedBody';
import { MenuList } from '../MenuList/MenuList';
import { PageContainer } from '../PageContainer/PageContainer';
import * as Styled from './Menu.styled'
import * as styles from './styles'

interface MenuProps<T> {
    data: T[];
    renderItem: (item: T) => ReactNode;
    isMobile: boolean;
    positionTop: number;
    isOpen: boolean;
}

export const Menu = <T,>({ data, renderItem, isMobile,  positionTop, isOpen }: MenuProps<T>) => {
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