import { FC } from "react";

import * as Styled from './Loader.styled';

interface LoaderProps {
  size?: string,
  margin?: string,
}

export const Loader: FC<LoaderProps> = ({ size, margin }) =>
  <Styled.Loader size={size} margin={margin}></Styled.Loader>
