import { css } from 'styled-components';

import { StyledAdaptiveImageProps } from './AdaptivImage.styled';

export const skeletonStyle = css<StyledAdaptiveImageProps>`
  display: ${({ maxWidth }) => maxWidth ? 'inline-block' : 'block'} ;
  position: relative;
  overflow: hidden;
`

export const skeletonActiveStyle = css`
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

export const isLoadedImageStyle = css`
  transition: opacity 1s ease-out;
  opacity: 1;
`

export const isLoadedThumbImageStyle = css`
  opacity: 1;
`

export const isLoadedThumbStyle = css`
  opacity: 0;
`