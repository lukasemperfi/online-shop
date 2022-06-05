import { FC, ComponentPropsWithoutRef} from 'react'
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './IconButton.styled'

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  width?: number | string;
  height?: number | string;
  styles?: FlattenSimpleInterpolation;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  width,
  height,
  onClick,
  styles,
  ...rest
}) =>
  <Styled.IconButton
    width={width}
    height={height}
    onClick={onClick}
    styles={styles}
    {...rest}
  >
    {children}
  </Styled.IconButton>
