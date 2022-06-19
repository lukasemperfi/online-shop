import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Image } from './components/UI/Image/Image'
import { Modal } from './components/UI/Modal/Modal'
import catImage from './assets/catBig.webp'
import { BurgerBtn } from './components/UI/AppBar/BurgerBtn/BurgerBtn'
import { Menu } from './components/UI/AppBar/Menu/Menu'
import { AppBar } from './components/UI/AppBar/AppBar'
import { Popup } from './components/UI/Popup/Popup'
import { useMediaQuery } from './hooks/useMediaQuery'
// import { adaptiveValue } from './styles/mixins.styled'

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]

export const App = () => {
  
  return (
    <>
      {/* <BurgerBtn onClick={() => ''} />
      <Menu
        items={items}
        isMobile={true}
        open={false}
      /> */}
      {/* <AppBar/> */}
      
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

    </>
  )
}

