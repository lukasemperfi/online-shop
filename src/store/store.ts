import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { testSlice } from './testSlice';

const rootReducer = combineReducers({
    testAuth: testSlice
});

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

