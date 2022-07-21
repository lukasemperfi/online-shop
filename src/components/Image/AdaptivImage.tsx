import React, { ComponentPropsWithoutRef, FC, useState } from 'react'

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface AdaptiveImageProps extends ComponentPropsWithoutRef<'img'> {
    aspectRatio?: number;
    imageStyles?: FlattenSimpleInterpolation;
    maxWidth?: string;
}

interface StyledAdaptiveImageProps {
    aspectRatio?: number;
    imageStyles?: FlattenSimpleInterpolation;
    maxWidth?: string;
    isImageLoaded?: boolean;
}


const skeletonActiveStyle = css`
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(to right, transparent 0%, #ecebeb 50%, transparent 100%);
        animation: load 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;

    @keyframes load {
        from {
            left: -150px;
        }
        to   {
            left: 100%;
        }
    }

    }
`
const StyledSkeleton = styled.div<StyledAdaptiveImageProps>`
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.11);

    ${({isImageLoaded}) => !isImageLoaded && skeletonActiveStyle}

`

const StyledAdaptiveImage = styled.img<StyledAdaptiveImageProps>`
    width:${({ maxWidth }) => maxWidth ? maxWidth : '100%'};
    max-width: 100%;
    height: auto;
    aspect-ratio: ${({ aspectRatio }) => aspectRatio ? aspectRatio : 1};
    object-fit: cover;
    opacity: ${({isImageLoaded}) => isImageLoaded ? 1 : 0 };

    ${({ imageStyles }) => imageStyles}
`

export const AdaptiveImage: FC<AdaptiveImageProps> = ({ aspectRatio, imageStyles, maxWidth, ...imageProperies }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleOnLoad = () => {
        setIsImageLoaded(true)
    };

    return (
        <StyledSkeleton isImageLoaded={isImageLoaded}>
            <StyledAdaptiveImage
                aspectRatio={aspectRatio}
                imageStyles={imageStyles}
                maxWidth={maxWidth}
                onLoad={handleOnLoad}
                isImageLoaded={isImageLoaded}
                {...imageProperies}
            />
        </StyledSkeleton>
    )
}
