import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { CartItem } from '../components/CartItem/CartItem'
import { Details } from '../components/Details/Details'
import { AdaptiveImage } from '../components/UI/AdaptivImage/AdaptivImage'
import { Loader } from '../components/UI/Loaders/Loader/Loader'
import { MainButton } from '../components/UI/MainButton/MainButton'
import { NoDataFound } from '../components/UI/NoDataFound/NoDataFound'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProductById, selectProduct, selectProductsState } from '../store/productsSlice/productsSlice'

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const { product, isLoading } = useAppSelector(selectProductsState)

  const isPoductNotExist = (product === undefined)
console.log(id);

  useEffect(() => {
    if (!product || !!id) {
      dispatch(fetchProductById(id))
    }

  }, [id])


  return (
    <PageContainer>

      {isLoading && <Loader />}

      {(!isLoading && product) && <Details item={product} />}

      {(isPoductNotExist && !isLoading) && <NoDataFound title='Product does not exist' />}
    </PageContainer>
  )
}
