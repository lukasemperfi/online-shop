import styled, { css } from 'styled-components'

import { calcAdaptiveValue } from '../../styles/helpers';
import { screenWidth, spacing } from '../../styles/styles';

interface ResponsiveAppBarProps {
    isMobile: boolean;
}

export const ResponsiveAppBar = styled.header`
    position: sticky;
    top: 0;
    /* left: 0; */
    /* width: 100%; */
    background-color: #FFFFFF;
    z-index: 1000;
    ${calcAdaptiveValue('padding-top', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
    ${calcAdaptiveValue('padding-bottom', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
    box-shadow: 0 6px 4px -4px rgb(0 0 0 / 20%);
`
export const Top = styled.div<ResponsiveAppBarProps>`
    display: flex;
    align-items: center;
    margin-bottom: ${({ isMobile }) => isMobile ? '0px' : '20px'};
    position: relative;
    z-index: 1;
`
export const Col = styled.div`
    flex: 0 1 33.333%;
    display: flex;
`
export const Col1 = styled(Col)`
    justify-content: flex-start;
`
export const Col2 = styled(Col)`
    justify-content: center;
`

export const Col3 = styled(Col)`
    justify-content: flex-end;
`

export const logoStyle = css`
    max-width: 100%;
    min-width: 155px;
`