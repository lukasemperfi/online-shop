import { behaviorPlugin } from '@testing-library/user-event/dist/keyboard/types';
import { NavLink } from 'react-router-dom';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components'

import { calcAdaptiveValue } from '../../styles/helpers';
import { Colors, screenWidth, spacing } from '../../styles/styles';

interface ResponsiveAppBarProps {
    isMobile: boolean;
}

export const ResponsiveAppBar = styled.header`
    position: sticky;
    top: 0;
    background-color: #FFFFFF;
    /* z-index: 1000; */
    z-index: 1;
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