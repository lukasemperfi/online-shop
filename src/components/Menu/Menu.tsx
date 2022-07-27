import { ReactNode, useEffect } from 'react'

import { useLockedBody } from '../../hooks/useLockedBody';
import { MenuList } from '../MenuList/MenuList';
import { PageContainer } from '../PageContainer/PageContainer';
import { TabsPanel } from '../TabsPanel/TabsPanel';
import * as Styled from './Menu.styled'
import * as styles from './styles'

interface MenuProps<T> {
    data: T[];
    renderItem: (item: T, onClick?: () => void, index?: number ) => ReactNode;
    keyExtractor: (item: T) => string;
    isMobile: boolean;
    positionTop: number;
    isOpen: boolean;
    onClick: () => void;
}

export const Menu = <T,>({ data, renderItem, keyExtractor, isMobile, positionTop, isOpen, onClick }: MenuProps<T>) => {
    const isBodyLocked = isMobile && isOpen
    
    useLockedBody(isBodyLocked)


    return (
        <Styled.Container isMobile={isMobile} positionTop={positionTop} isOpen={isOpen}>
            <PageContainer containerStyles={!isMobile ? styles.desktopPageContainerStyle : undefined}>
                <Styled.Wrapper isMobile={isMobile} isOpen={isOpen}>
                    {(isMobile) && <TabsPanel onClick={onClick}/>}
                    <Styled.Nav>
                        <MenuList
                            data={data}
                            renderItem={renderItem}
                            onClick={onClick}
                            keyExtractor={keyExtractor}
                            containerStyle={isMobile ? styles.mobileMenuListContainerStyle : styles.desktopMenuListContainerStyle}
                        />
                    </Styled.Nav>
                </Styled.Wrapper>
            </PageContainer>
        </Styled.Container>
    )
}