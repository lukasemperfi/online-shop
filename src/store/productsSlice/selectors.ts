import { RootState } from "../store";

export const selectProductsState = (state: RootState) => state?.products
export const selectIsProductLoading = (state: RootState) => state?.products?.isLoading
export const selectProducts = (state: RootState) => state?.products?.products
export const selectProduct = (state: RootState) => state?.products?.product