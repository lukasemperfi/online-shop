import styled from 'styled-components'

import { StyledProps } from './models/StyledProps'
import * as styles from './styles'

export const Container = styled.div<StyledProps>`
    ${({ isMobile }) => isMobile ? styles.mobileContainerStyle : styles.desktopContainerStyle}
`

export const Nav = styled.nav<StyledProps>`
    display: inline-block;
    ${({isOpen, isMobile}) => (isMobile && !isOpen) ? styles.mobileNavStyle : styles.desktopNavStyle}
`