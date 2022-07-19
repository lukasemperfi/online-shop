import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './productsSlice/productsSlice';
import { userSlice } from './userSlice';

const rootReducer = combineReducers({
  userAuth: userSlice,
  products: productsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

