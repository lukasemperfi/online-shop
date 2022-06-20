import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface ImageContainerProps {
  containerStyle?: FlattenSimpleInterpolation;
  imageStyle?: FlattenSimpleInterpolation;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  ${({ containerStyle }) => containerStyle}
  & img {
    ${({ imageStyle }) => imageStyle}
  }
`;