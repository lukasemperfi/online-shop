import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice';

const rootReducer = combineReducers({
  userAuth: userSlice
});

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

