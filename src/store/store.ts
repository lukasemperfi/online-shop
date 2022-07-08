import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice';

const rootReducer = combineReducers({
  userAuth: authSlice
});

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

