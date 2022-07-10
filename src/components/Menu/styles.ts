import { css } from 'styled-components'
import { StyledProps } from './models/StyledProps'

export const desktopPageContainerStyle = css`
    @media (min-width: 0px) {
        padding: 0;
    }  
`

// Container styles
export const desktopContainerStyle = css`
    display: flex;
    justify-content: center;
`

export const mobileContainerStyle = css<StyledProps>`
    position: fixed;
    top: 0;
    left: 0;
    padding-top: ${({positionTop}) => positionTop + 'px' };
    display: block;
    background-color: #FFFFFF;
    height: ${({isOpen, isMobile}) => (isMobile && isOpen) ? '100vh' : '0'};
    width: 100vw;
    overflow: hidden;
    transition: all 0.3s ;
`
//////////////////////////////

//MenuListContainer Styles
export const desktopMenuListContainerStyle = css`
    position: relative;
    display: inline-flex;
    gap: 10px;
`

export const mobileMenuListContainerStyle = css`
    display: inline-flex;
    flex-direction: column;
    gap: 20px;
`

//////////////////////////////

//Nav styles
export const desktopNavStyle = css`
    opacity: 1;
    visibility: visible;
`

export const mobileNavStyle = css`
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
`

//////////////////////////////
