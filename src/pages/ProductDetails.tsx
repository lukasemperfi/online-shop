import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Details } from '../components/Details/Details';
import { Loader } from '../components/UI/Loaders/Loader/Loader';
import { NoDataFound } from '../components/UI/NoDataFound/NoDataFound';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchProductById, selectProductsState } from '../store/productsSlice/productsSlice';

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const { product, isLoading } = useAppSelector(selectProductsState)

  const isPoductNotExist = (product === undefined)

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
