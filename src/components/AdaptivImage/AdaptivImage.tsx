import { ComponentPropsWithoutRef, FC, useState } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './AdaptivImage.styled';

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
        <Styled.Skeleton isImageLoaded={isImageLoaded} skeleton={skeleton}>
            {blur && <Styled.LoadedThumb
                imageStyles={imageStyles}
                dimensions={dimensions}
                maxWidth={maxWidth}
                isImageLoaded={isImageLoaded}
                {...imageProperies}
                src={thumbImage}
            />}
            <Styled.LoadedImage
                imageStyles={imageStyles}
                dimensions={dimensions}
                maxWidth={maxWidth}
                onLoad={handleOnLoad}
                isImageLoaded={isImageLoaded}
                {...imageProperies}
            />
        </Styled.Skeleton>
    )
}
