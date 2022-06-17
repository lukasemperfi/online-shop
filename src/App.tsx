import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Image } from './components/UI/Image/Image'
import { Modal } from './components/UI/Modal/Modal'
import catImage from './assets/catBig.webp'
import { BurgerBtn } from './components/UI/BurgerMenu/BurgerBtn/BurgerBtn'
import { MenuList } from './components/UI/BurgerMenu/MenuList/MenuList'
// import { adaptiveValue } from './styles/mixins.styled'

const items = [{name: 'Ботинки', href: '#'}, {name: 'Туфли', href: '#'}, {name: 'Кеды', href: '#'}, {name: 'Сланцы', href: '#'},]

export const App = () => {



  const mobileAnchor = css`
  padding: 35px;
`

console.log('just css', mobileAnchor);
// console.log(adaptiveValue('padding', 20))

  return (
    <>
    <MenuList
      items={items}
      isMobile={true}
    />
    </>
  )
}

