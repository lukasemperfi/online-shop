import React, { ComponentPropsWithoutRef, FC, useState } from 'react'

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export interface AdaptiveImageProps extends ComponentPropsWithoutRef<'img'> {
    imageStyles?: FlattenSimpleInterpolation;
    maxWidth?: string;
    skeleton?: boolean;
    dimensions?: {
        width: number;
        height: number;
    }
    thumbImage?: string;
    blur?: boolean;
}

interface StyledAdaptiveImageProps extends AdaptiveImageProps {
    isImageLoaded?: boolean;
    isThumbImageLoaded?: boolean;
}


const skeletonStyle = css<StyledAdaptiveImageProps>`
    display: ${({ maxWidth }) => maxWidth ? 'inline-block' : 'block'} ;
    position: relative;
    overflow: hidden;
`

const skeletonActiveStyle = css`
    background-color: rgba(0, 0, 0, 0.11);
    
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
    /* width: 100%;
    height: 100%; */

    ${({ skeleton }) => skeleton && skeletonStyle}

    ${({ skeleton, isImageLoaded }) => (skeleton && !isImageLoaded) && skeletonActiveStyle}

`
const isLoadedImageStyle = css`
    transition: opacity 1s ease-out;
	opacity: 1;
`

const isLoadedThumbImageStyle = css`
	opacity: 1;
`

const isLoadedThumbStyle = css`
	opacity: 0;
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
    height: ${({ height, maxWidth }) => (height && !maxWidth) ? height : '100%'};
    aspect-ratio: ${({ dimensions }) => dimensions ? (dimensions.width / dimensions.height) : 1};
    object-fit: cover;

    ${({ imageStyles }) => imageStyles}
`

const StyledLoadedImage = styled(StyledAdaptiveImage)`
    opacity: 0;
   
    ${({ isImageLoaded }) => isImageLoaded && isLoadedImageStyle};
`

const StyledLoadedThumb = styled(StyledAdaptiveImage)`
	position: absolute;
	top: 0;
	left: 0;
    opacity: 1;
	filter: blur(10px);
	transition: opacity 1s ease-out;

    ${({ isImageLoaded }) => isImageLoaded && isLoadedThumbStyle};
`



export const AdaptiveImage: FC<AdaptiveImageProps> = ({ 
    imageStyles, 
    maxWidth, 
    dimensions, 
    skeleton = false,
    thumbImage, 
    blur = false,
    ...imageProperies 
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleOnLoad = () => {
        setIsImageLoaded(true)
    };


    return (
        <StyledSkeleton isImageLoaded={isImageLoaded} skeleton={skeleton}>
            {blur && <StyledLoadedThumb
                imageStyles={imageStyles}
                dimensions={dimensions}
                maxWidth={maxWidth}
                isImageLoaded={isImageLoaded}
                {...imageProperies}
                src={thumbImage}
            />}
            <StyledLoadedImage
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
