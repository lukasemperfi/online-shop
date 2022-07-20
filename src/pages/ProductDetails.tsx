import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Card, CardVariant } from '../components/Card/Card'
import { CartItem } from '../components/CartItem/CartItem'
import { UniveralCard } from '../components/CartItem/UniveralCard'
import { Details } from '../components/Details/Details'
import { AdaptiveImage } from '../components/Image/AdaptivImage'
import { Loader } from '../components/Loaders/Loader'
import { MainButton } from '../components/MainButton/MainButton'
import { NoDataFound } from '../components/NoDataFound/NoDataFound'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProductById, selectProduct, selectProductsState } from '../store/productsSlice/productsSlice'


export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const { product, isLoading } = useAppSelector(selectProductsState)

  const isPoductNotExist = (product === undefined)

  useEffect(() => {
    if (!product || !!id) {
          console.log('fetch id');  
      dispatch(fetchProductById(id))
    }
    console.log('in eff',  !!id);
    
  }, [id])


  return (
    <PageContainer>
      {isLoading && <Loader />}

      {(!isLoading && product) && <Details item={product} />}

      {(isPoductNotExist && !isLoading) && <NoDataFound title='Product does not exist' />}

    </PageContainer>
  )
}
