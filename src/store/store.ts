import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartSlice } from './cartSlice/cartSlice';
import { filtersSlice } from './filtersSlice/filtersSlice';
import { productsSlice } from './productsSlice/productsSlice';
import { RootReducers } from './rootReducers';
import { userSlice } from './userSlice/userSlice';

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
    serializableCheck: false,
  }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export const persistor = persistStore(store);
