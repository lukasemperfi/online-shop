import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface ImageContainerProps {
  containerStyle?: FlattenSimpleInterpolation;
  imageStyle?: FlattenSimpleInterpolation;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  overflow: hidden;

  ${({ containerStyle }) => containerStyle}

  & img {
    max-width: 100%;

    ${({ imageStyle }) => imageStyle}
  }
`;