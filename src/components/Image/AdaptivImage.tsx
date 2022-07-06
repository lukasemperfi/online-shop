import React, { ComponentPropsWithoutRef, FC } from 'react'

import styled, { css } from 'styled-components';

interface AdaptiveImageProps extends ComponentPropsWithoutRef<'img'> {
    aspectRatio?: number;
}

interface StyledAdaptiveImageProps {
    aspectRatio?: number;
}

const skeleton = css`
    background-color: rgba(0, 0, 0, 0.11);
    position: relative;
    overflow: hidden;
    mask-image: -webkit-radial-gradient(white, black);

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

const StyledAdaptiveImage = styled.img<StyledAdaptiveImageProps>`
    width: 100%;
    height: 100%;
    aspect-ratio: ${({ aspectRatio }) => aspectRatio ? aspectRatio : 1};
    object-fit: cover;

    ${skeleton}
`

export const AdaptiveImage: FC<AdaptiveImageProps> = ({ aspectRatio, ...imageProperies }) => {
    return (
        <StyledAdaptiveImage
            aspectRatio={aspectRatio}
            {...imageProperies}
        />
    )
}
