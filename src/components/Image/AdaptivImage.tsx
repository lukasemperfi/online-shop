import React, { ComponentPropsWithoutRef, FC, useState } from 'react'

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface AdaptiveImageProps extends ComponentPropsWithoutRef<'img'> {
    imageStyles?: FlattenSimpleInterpolation;
    maxWidth?: string;
    skeleton?: boolean;
    dimensions?: {
        width: number;
        height: number;
    }
}

interface StyledAdaptiveImageProps extends AdaptiveImageProps {
    isImageLoaded?: boolean;
}


const skeletonStyle = css<StyledAdaptiveImageProps>`
    display: ${({ maxWidth }) => maxWidth ? 'inline-block' : 'block'} ;
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.11);
`

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

    ${({ skeleton }) => skeleton && skeletonStyle}

    ${({ skeleton, isImageLoaded }) => (skeleton && !isImageLoaded) && skeletonActiveStyle}

`

const StyledAdaptiveImage = styled.img<StyledAdaptiveImageProps>`
    width: ${({ width, maxWidth }) => {
        if (maxWidth) {
            return maxWidth
        }
        if (width && !maxWidth) {
            return width
        }
        return '100%'
    }};

    max-width: 100%;
    height: ${({ height, maxWidth }) => (height && !maxWidth) ? height : 'auto'};
    aspect-ratio: ${({ dimensions }) => dimensions ? (dimensions.width / dimensions.height) : 1};
    object-fit: cover;
    opacity: ${({ isImageLoaded }) => isImageLoaded ? 1 : 0};

    ${({ imageStyles }) => imageStyles}
`

export const AdaptiveImage: FC<AdaptiveImageProps> = ({ imageStyles, maxWidth, dimensions, skeleton = false, ...imageProperies }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)




    const handleOnLoad = () => {
        setIsImageLoaded(true)
    };

    return (
        <StyledSkeleton isImageLoaded={isImageLoaded} skeleton={skeleton}>
            <StyledAdaptiveImage
                imageStyles={imageStyles}
                dimensions={dimensions}
                maxWidth={maxWidth}
                onLoad={handleOnLoad}
                isImageLoaded={isImageLoaded}
                {...imageProperies}
            />
        </StyledSkeleton>
    )
}
