import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface userAuthState {
    isLoggedIn: boolean;
    isFetching: boolean;
    isError: boolean;
    errorMessage: string | unknown;
    jwt?: string;
}

const initialState: userAuthState = {
    isLoggedIn: false,
    isFetching: false,
    isError: false,
    errorMessage: '',
    jwt: '',
}

const auth = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        logout: (state) => {
            console.log('working');
            
        },
    },

});

export const { logout } = auth.actions;

export const testSlice = auth.reducer;