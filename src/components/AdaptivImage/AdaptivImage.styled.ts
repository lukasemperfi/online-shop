import styled from 'styled-components';

import { AdaptiveImageProps } from './AdaptivImage';
import { isLoadedImageStyle, isLoadedThumbStyle, skeletonActiveStyle, skeletonStyle } from './styles';

export interface StyledAdaptiveImageProps extends AdaptiveImageProps {
  isImageLoaded?: boolean;
  isThumbImageLoaded?: boolean;
}

export const Skeleton = styled.div<StyledAdaptiveImageProps>`

  ${({ skeleton }) => skeleton && skeletonStyle}

  ${({ skeleton, isImageLoaded }) => (skeleton && !isImageLoaded) && skeletonActiveStyle}

`

export const AdaptiveImage = styled.img<StyledAdaptiveImageProps>`
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

export const LoadedImage = styled(AdaptiveImage)`
  opacity: 0;
 
  ${({ isImageLoaded }) => isImageLoaded && isLoadedImageStyle};
`

export const LoadedThumb = styled(AdaptiveImage)`
  position: absolute;
  top: 0;
  left: 0;
    opacity: 1;
  filter: blur(10px);
  transition: opacity 1s ease-out;

  ${({ isImageLoaded }) => isImageLoaded && isLoadedThumbStyle};
`
