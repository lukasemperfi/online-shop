import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartSlice } from './cartSlice/cartSlice';
import { filtersSlice } from './filtersSlice';
import { productsSlice } from './productsSlice/productsSlice';
import { RootReducers } from './rootReducers';
import { userSlice } from './userSlice';

const rootReducer = combineReducers({
  [RootReducers.userAuth]: userSlice,
  [RootReducers.products]: productsSlice,
  [RootReducers.filters]: filtersSlice,
  [RootReducers.cart]: cartSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [RootReducers.cart]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'products/updateState'],
      ignoredPaths: ['products.pagination.lastDoc']
    },
  }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export const persistor = persistStore(store);
