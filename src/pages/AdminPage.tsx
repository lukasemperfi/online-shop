import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { CartItem } from '../components/CartItem/CartItem'
import { ItemsList } from '../components/ItemsList/ItemsList'
import { ButtonColors, MainButton } from '../components/MainButton/MainButton'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { ProductCardProps } from '../models/ProductCardProps'
import { Breakpoints } from '../styles/styles'
import userIcon from '../assets/user.png'
import { Image } from '../components/Image/Image'
import { AdminProductCard } from '../components/AdminProductCard/AdminProductCard'
import { AddNewProductForm } from '../components/AddNewProductForm/AddNewProductForm'
import { MainPopup } from '../components/MainPopup/MainPopup'
import { ModalAddNewProductForm } from '../components/ModalAddNewProductForm/ModalAddNewProductForm'
import { OverlayPreloader } from '../components/OverlayPreloader/OverlayPreloader'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { deleteProduct, selectProducts, setProducts } from '../store/productsSlice/productsSlice'
import { Product } from '../firebase/models/Product'
import { onSnapshot } from 'firebase/firestore'
import { productsCollection } from '../firebase/firebase'
const data = [
  {
    image: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg',
    title: 'Крутой кот в очках. Босс всех котов на районе ', price: 3500
  },
  {
    image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
    title: 'Кот на чиле', price: 45
  },
  {
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
    title: 'Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня', price: 77
  },
  {
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
    title: 'Кот после рабочего дня 2222', price: 56
  },
  {
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
    title: 'Кот после рабочего дня 333', price: 56
  },
  {
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
    title: 'Кот после рабочего дня 4444', price: 444444
  },
]


const GridContainer = styled.div`
  display: grid;
  width: 100%;
  border-bottom: 3px solid rgb(0 0 0 / 20%);

  @media (min-width: ${Breakpoints.xs}) {
    grid-template-columns: 100%;
  }

  @media (min-width: ${Breakpoints.md}) {
    grid-template-columns: 15% 85%;
  }

  @media (min-width: ${Breakpoints.xl}) {
    grid-template-columns: 15% 75%;
  }

  @media (min-width: ${Breakpoints.xxl}) {
    grid-template-columns: 15% 65%;
  }
`
const Aside = styled.aside`


  @media (min-width: ${Breakpoints.md}) {
    border-right: 3px solid rgb(0 0 0 / 20%);
  }
`
const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 3px solid rgb(0 0 0 / 20%);
`
const AvatarTitle = styled.h3`
  
`

const Menu = styled.div`
  
`
const MenuItem = styled.div`
  padding: 20px;
  border-bottom: 3px solid rgb(0 0 0 / 20%);
`
const Products = styled.main`
  padding: 20px;
`
const ProductsTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 1.5rem;
`
const addProductButtonStyles = css`
  margin-bottom: 20px;
  width: auto;
`

export const AdminPage = () => {
  const [isAddNewProductPopupOpen, setIsAddNewProductPopupOpen] = useState(false)
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)

  useEffect(() => {

    const unsubscribe = onSnapshot(productsCollection, (snapshot) => {
      const products: Product[] = []

      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data() })
      })
      dispatch(setProducts(products))
      
    })

    return () => unsubscribe();

  }, [])

  const handleAddNewProductPopupOnOpen = () => {
    setIsAddNewProductPopupOpen(true)
  }

  const handleAddNewProductPopupOnClose = () => {
    setIsAddNewProductPopupOpen(false)
  }

  const removeProduct = (id: string) => {
    dispatch(deleteProduct(id))
  }

  const renderItem = (item: Product, index?: number) =>
    <CartItem
      item={item}
      key={item.id}
      onDelete={removeProduct}
      quantity={false}
    />

  return (
    <GridContainer>
      <Aside>
        <Avatar>
          <Image
            src={userIcon}
            width={50}
          />
          <AvatarTitle>ADMIN</AvatarTitle>
        </Avatar>
        <Menu>
          <MenuItem>
            <MainButton color={ButtonColors.text}>Sign Out</MainButton>
          </MenuItem>
        </Menu>
      </Aside>
      <Products>
        <MainButton
          styles={addProductButtonStyles}
          onClick={handleAddNewProductPopupOnOpen}
        >ADD NEW PRODUCT
        </MainButton>
        <ProductsTitle>MANAGE PRODUCTS</ProductsTitle>
        <ItemsList
          data={products}
          renderItem={renderItem}
        />
        {/* <MainPopup
          isOpened={isAddNewProductPopupOpen}
          onClose={handleAddNewProductPopupOnClose}
        >
          <AddNewProductForm/>
        </MainPopup> */}
        <ModalAddNewProductForm
          isOpened={isAddNewProductPopupOpen}
          onClose={handleAddNewProductPopupOnClose}
        />
      </Products>
    </GridContainer>
  )
}
