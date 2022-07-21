import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filtersSlice } from './filtersSlice';
import { productsSlice } from './productsSlice/productsSlice';
import { RootReducers } from './rootReducers';
import { userSlice } from './userSlice';

const rootReducer = combineReducers({
  [RootReducers.userAuth]: userSlice,
  [RootReducers.products]: productsSlice,
  [RootReducers.filters]: filtersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

