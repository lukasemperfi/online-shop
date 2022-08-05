import { ComponentPropsWithoutRef, FC } from 'react';

import * as Styled from './DropdownMenuItem.styled';

export const DropdownMenuItem: FC<ComponentPropsWithoutRef<'li'>> = ({
  children,
  ...rest
}) =>
  <Styled.Item {...rest}>{children}</Styled.Item>
