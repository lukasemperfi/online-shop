import { FC, MouseEventHandler } from 'react'

import * as Styled from './BurgerBtn.styled'

interface BurgerBtnProps {
  isMobile: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}

export const BurgerBtn: FC<BurgerBtnProps> = ({ isMobile, onClick, isActive }) => {
  return (
    <Styled.Burger
      data-testid="burger-btn"
      isMobile={isMobile}
      onClick={onClick}
    >
      <Styled.Line1 data-testid="burger-btn-line" isActive={isActive}></Styled.Line1>
      <Styled.Line2 data-testid="burger-btn-line" isActive={isActive}></Styled.Line2>
      <Styled.Line3 data-testid="burger-btn-line" isActive={isActive}></Styled.Line3>
    </Styled.Burger>
  )
}
