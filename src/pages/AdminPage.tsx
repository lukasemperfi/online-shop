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
import { onSnapshot, orderBy, query } from 'firebase/firestore'
import { productsCollection } from '../firebase/firebase'
import { NoDataFound } from '../components/NoDataFound/NoDataFound'
import { AdminCard } from '../components/AdminCard/AdminCard'
import noProductImage from "../assets/no-product-found.jpg"

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
    const q = query(productsCollection, orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
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

  const renderItem = (item: Product) =>
    <AdminCard
      name={item.name}
      price={item.price}
      image={item.image}
      id={item.id}
      key={item.id}
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
        <ModalAddNewProductForm
          isOpened={isAddNewProductPopupOpen}
          onClose={handleAddNewProductPopupOnClose}
        />
        <ItemsList
          data={products}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
          gap="20px"
          listEmptyComponent={
            <NoDataFound
              title='Products Is Empty!'
              src={noProductImage}
              dimensions={{
                width: 592,
                height: 253,
              }}
              maxWidth='500px'
            />
          }
        />
      </Products>
    </GridContainer>
  )
}
