import { useEffect, useState } from 'react';
import { onSnapshot, orderBy, query } from 'firebase/firestore';

import { ItemsList } from '../../components/UI/ItemsList/ItemsList';
import { MainButton } from '../../components/UI/MainButton/MainButton';
import userIcon from '../../assets/user.png';
import { ModalAddNewProductForm } from '../../components/ModalAddNewProductForm/ModalAddNewProductForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectProducts, setProducts } from '../../store/productsSlice/productsSlice';
import { Product } from '../../firebase/models/Product';
import { productsCollection } from '../../firebase/firebase';
import { NoDataFound } from '../../components/UI/NoDataFound/NoDataFound';
import { AdminCard } from '../../components/AdminCard/AdminCard';
import noProductImage from "../../assets/no-product-found.jpg";
import { logOut, selectUser } from '../../store/userSlice';
import { AdaptiveImage } from '../../components/UI/AdaptivImage/AdaptivImage';
import { ButtonColors } from '../../components/UI/MainButton/MainButton.styled';
import * as Styled from './AdminPage.styled';

export const AdminPage = () => {
  const [isAddNewProductPopupOpen, setIsAddNewProductPopupOpen] = useState(false)
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)
  const user = useAppSelector(selectUser)
  const userName = `${user?.firstName} ${user?.lastName}`

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

  const onLogOut = () => {
    dispatch(logOut())
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
    <Styled.GridContainer>
      <Styled.Aside>
        <Styled.Avatar>
          <AdaptiveImage
            src={userIcon}
            maxWidth='50px'
          />
          <h3>{userName}</h3>
        </Styled.Avatar>
        <div>
          <Styled.MenuItem>
            <MainButton
              color={ButtonColors.text}
              onClick={onLogOut}
            >
              Sign Out
            </MainButton>
          </Styled.MenuItem>
        </div>
      </Styled.Aside>
      <Styled.Products>
        <MainButton
          styles={Styled.addProductButtonStyles}
          onClick={handleAddNewProductPopupOnOpen}
        >ADD NEW PRODUCT
        </MainButton>
        <Styled.ProductsTitle>MANAGE PRODUCTS</Styled.ProductsTitle>
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
      </Styled.Products>
    </Styled.GridContainer>
  )
}
