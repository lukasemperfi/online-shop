import React, { FC, MouseEventHandler, useState } from 'react'

import styled, { css } from 'styled-components'
import * as Styled from './BurgerBtn.styled'

interface BurgerBtnProps {
    isActive: boolean;
    onClick: MouseEventHandler<HTMLDivElement>
}

export const BurgerBtn: FC<BurgerBtnProps> = ({isActive, onClick}) => {

    return (
            <Styled.Burger onClick={onClick}>
                <Styled.Line1 isActive={isActive}></Styled.Line1>
                <Styled.Line2 isActive={isActive}></Styled.Line2>
                <Styled.Line3 isActive={isActive}></Styled.Line3>
            </Styled.Burger>
    )
}
