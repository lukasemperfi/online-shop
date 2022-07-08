import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

import { RootState } from "./store";

interface userAuthState {

}

interface AuthData {
    email: string;
    password: string;
}

const initialState: userAuthState = {

}

export const signUp = createAsyncThunk<void, AuthData, { rejectValue: string }>(
    'userAuth/signUp',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            // console.log(response);
            
        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const signIn = createAsyncThunk<void, AuthData, { rejectValue: string }>(
    `userAuth/signIn`,
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
    `userAuth/logOut`,
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth)

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);


const authentication = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
                
            })

        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            
        })

        builder.addCase(signUp.rejected, (state, { payload }) => {
            
        })
    },
});

export const {  } = authentication.actions;

export const authSlice = authentication.reducer;