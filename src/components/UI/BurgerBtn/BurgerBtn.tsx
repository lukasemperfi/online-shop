import { FC, MouseEvent } from 'react'

import * as Styled from './BurgerBtn.styled'

interface BurgerBtnProps {
  onClick: (event?: MouseEvent<HTMLDivElement>) => void;
  isActive: boolean;
}

export const BurgerBtn: FC<BurgerBtnProps> = ({
  onClick,
  isActive = false
}) =>
  <Styled.Burger onClick={onClick}>
    <Styled.Line1 isActive={isActive}></Styled.Line1>
    <Styled.Line2 isActive={isActive}></Styled.Line2>
    <Styled.Line3 isActive={isActive}></Styled.Line3>
  </Styled.Burger>
