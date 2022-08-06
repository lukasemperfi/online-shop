import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, usersCollection } from "../../firebase/firebase";
import { UserInfo } from "../../firebase/models/UserInfo";
import { ErrorCode } from "../../firebase/utils/getMessageFromErrorCode";
import { RootReducers } from "../rootReducers";

import { SignInData } from "./models/SignInData";
import { SignUpData } from "./models/SignUpData";

interface userAuthState {
    user?: UserInfo | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    errorCode?: ErrorCode;
    isAuthChecked: boolean;
}

const initialState: userAuthState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    errorCode: '',
    isAuthChecked: false,
}

export const signUp = createAsyncThunk<void, SignUpData, { rejectValue: string }>(
    `${RootReducers.userAuth}/signUp`,
    async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const docRef = doc(usersCollection, userCredential.user.uid)

            await setDoc(docRef, {
                firstName,
                lastName,
                email,
                roles: ['user']
            });

        } catch (error: any) {
            return rejectWithValue(error.code);
        }
    }
);

export const signIn = createAsyncThunk<void, SignInData, { rejectValue: string }>(
    `${RootReducers.userAuth}/signIn`,
    async ({ email, password }, { rejectWithValue }) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)

        } catch (error: any) {
            return rejectWithValue(error.code);
        }
    }
);

export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
    `${RootReducers.userAuth}/logOut`,
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth)

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const userStateChanged = createAsyncThunk(
    `${RootReducers.userAuth}/userStateChanged`,
    async (user: User | null, { rejectWithValue }) => {

        if (user === null) {
            return null
        }

        const uid = user?.uid

        try {
            const docRef = doc(usersCollection, uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return docSnap.data()
            } else {
                return undefined
            }

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }

    }
);

const authentication = createSlice({
    name: RootReducers.userAuth,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userStateChanged.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(userStateChanged.fulfilled, (state, { payload }) => {
            if (payload) {
                state.isLoggedIn = true
            } else {
                state.isLoggedIn = false
            }
            state.user = payload
            state.isLoading = false
            state.isAuthChecked = true
        })

        builder.addCase(userStateChanged.rejected, (state, { payload }) => {

        })

        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            state.isLoading = false
        })

        builder.addCase(signUp.rejected, (state, { payload }) => {
            state.isLoading = false
            state.errorCode = payload as ErrorCode
        })


        builder.addCase(signIn.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            state.isLoading = false
        })

        builder.addCase(signIn.rejected, (state, { payload }) => {
            state.isLoading = false
            state.errorCode = payload as ErrorCode
        })

        builder.addCase(logOut.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(logOut.fulfilled, (state, { payload }) => {
            state.isLoading = false
        })

        builder.addCase(logOut.rejected, (state, { payload }) => {
            state.isLoading = false
            state.errorCode = payload as ErrorCode
        })

    },
});

export const userSlice = authentication.reducer;
