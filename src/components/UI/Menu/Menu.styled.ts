import styled from 'styled-components';

import * as styles from './styles';

export interface StyledProps {
    isMobile: boolean;
    positionTop?: number;
    isOpen: boolean;
}

export const Container = styled.div<StyledProps>`
    ${({ isMobile }) => isMobile ? styles.mobileContainerStyle : styles.desktopContainerStyle}
`

export const Wrapper = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${({isOpen, isMobile}) => (isMobile && !isOpen) ? styles.mobileNavStyle : styles.desktopNavStyle}

`

export const Nav = styled.nav`
    display: inline-block;
`
