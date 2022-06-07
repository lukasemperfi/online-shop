import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface ImageContainerProps {
    styles?: FlattenSimpleInterpolation;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  overflow: hidden ;
  position: relative;
  ${({ styles }) => styles}
  & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
  }
`;