import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Image } from './components/Image/Image'
import { Popup } from './components/Popup/Popup'
import catImage from './assets/catBig.webp'
import { BurgerBtn } from './components/BurgerBtn/BurgerBtn'
import { Menu } from './components/Menu/Menu'
import { ResponsiveAppBar } from './components/ResponsiveAppBar/ResponsiveAppBar'
import { useMediaQuery } from './hooks/useMediaQuery'
import { spacing } from './styles/styles'
import { useElementSize } from './hooks/useElementSize'
import { Input } from './components/Input/Input'
import { Colors, MainButton } from './components/MainButton/MainButton'
// import { adaptiveValue } from './styles/mixins.styled'

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]

interface TopProps {
  top?: number | null;
}

const StyledDiv = styled.div`
      padding: 20px;
`
const StyledPaddding = styled.div<TopProps>`
      padding-top: ${({ top }) => top && (top + 20) + 'px'};
`


export const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  // const [pagePaddingTopRef, { height: pagePaddingTopHeight }] = useElementSize()
  // const [pagePaddingTopHeight, setPagePaddingTopHeight] = useState(null)
  const [ResponsiveAppBarRef, { height: ResponsiveAppBarHeight }] = useElementSize()

  const onClose = () => {
    setIsPopupOpen(false)
  }


  return (
    <>
      {/* <BurgerBtn onClick={() => ''} />
      <Menu
        items={items}
        isMobile={true}
        open={false}
      /> */}
      <StyledPaddding top={ResponsiveAppBarHeight} >
        {/* <ResponsiveAppBar reference={ResponsiveAppBarRef} ResponsiveAppBarHeight={ResponsiveAppBarHeight}/> */}
        <StyledDiv>
          <Input
            label='E-mail'
            placeholder='Введите свой email'
            type='text'
            errorText='Not correct'
          />
          <MainButton color={Colors.primary}>Войти</MainButton>
        </StyledDiv>

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed similique eveniet sit sint et corrupti, magnam saepe veritatis eligendi ut? Culpa unde voluptatem distinctio accusamus quas qui veniam fugit.
      </StyledPaddding>
    </>
  )
}

