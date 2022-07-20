import { FC } from "react"
import styled, { css } from "styled-components"


export enum LoaderSize {
  standart = '10px',
  medium = '5px',
  small = '3px',
}

interface StyledLoaderProps {
  size?: string;
  marginVertical?: string;
}

const StyledLoader = styled.div<StyledLoaderProps>`
  margin: ${({ marginVertical }) => marginVertical ? `${marginVertical} auto` : '0px auto'};
  font-size: ${({ size }) => size ? size : '10px'};
  position: relative;
  text-indent: -9999em;
  border-top: 1em solid rgba(115, 134, 226, 0.2);
  border-right: 1em solid rgba(115, 134, 226, 0.2);
  border-bottom: 1em solid rgba(115, 134, 226, 0.2);
  border-left: 1em solid #7386e2;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  &, &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`

interface LoaderProps {
  size?: string,
  marginVertical?: string,
}


export const Loader: FC<LoaderProps> = ({ size, marginVertical}) => {
  return (
      <StyledLoader size={size} marginVertical={marginVertical}>Loader</StyledLoader>
  )
}




