import { FC, MouseEvent, useState } from 'react'

import * as Styled from './BurgerBtn.styled'

interface BurgerBtnProps {
  onClick: (event?: MouseEvent<HTMLDivElement>) => void;
  isActive: boolean;
}

export const BurgerBtn: FC<BurgerBtnProps> = ({ onClick, isActive = false }) => {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = (event: MouseEvent<HTMLDivElement>) => {
  //   if (onClick) {
  //       onClick(event)
  //   }
  //   setIsActive(!isActive)
  // }

  return (
    <Styled.Burger onClick={onClick}>
      <Styled.Line1 isActive={isActive}></Styled.Line1>
      <Styled.Line2 isActive={isActive}></Styled.Line2>
      <Styled.Line3 isActive={isActive}></Styled.Line3>
    </Styled.Burger>
  )
}
