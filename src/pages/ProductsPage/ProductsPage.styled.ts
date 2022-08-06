import styled, { css } from "styled-components";

export const Skeleton = styled.span`
    display: block;
    background-color: rgba(0, 0, 0, 0.11);
    height: 1.2em;
    position: relative;
    overflow: hidden;
    mask-image: -webkit-radial-gradient(white, black);
    height: 300px;
    width: 300px;

    &::after {
        animation: animation-wave 1.4s linear 0.5s infinite;
        background: linear-gradient( 90deg, transparent, rgba(0, 0, 0, 0.04), transparent );
        content: '';
        position: absolute;
        transform: translateX(-100%);
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
    }

    @keyframes animation-wave {
        0% {
            transform: translateX(-100%);
        }
        50% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
}
`

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    min-height: 50px;
`

export const NoMoreData = styled.p`
    font-weight: 600;
    font-size: 20px;
`

export const Sort = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
`

export const pageContainerStyle = css`
   width: 100%;
`
