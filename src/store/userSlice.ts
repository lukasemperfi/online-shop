import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, usersCollection } from "../firebase/firebase";
import { UserInfo } from "../firebase/models/UserInfo";

import { RootState } from "./store";

interface userAuthState {
    user?: UserInfo | null;
    isLoggedIn: boolean;
    isLoading: boolean;
}

interface SignUpData {
    fullName: string;
    email: string;
    password: string;
}

interface SignInData {
    email: string;
    password: string;
}

const initialState: userAuthState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
}

export const signUp = createAsyncThunk<void, SignUpData, { rejectValue: string }>(
    'userAuth/signUp',
    async ({ fullName, email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const docRef = doc(usersCollection, userCredential.user.uid)

            await setDoc(docRef, {
                fullName,
                email,
                userRoles: ['user']
            });

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const signIn = createAsyncThunk<void, SignInData, { rejectValue: string }>(
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

export const userStateChanged = createAsyncThunk(
    `userAuth/userStateChanged`,
    async (uid: string | null, { rejectWithValue }) => {
        if (uid === null) {
            return null
        }

        try {
            const docRef = doc(usersCollection, uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                return docSnap.data()
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        } catch (error: any) {
            console.log(error.message);
            return rejectWithValue(error.message as string);
        }



    }
);


const authentication = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
    },
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
        })

        builder.addCase(userStateChanged.rejected, (state, { payload }) => {

        })

        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            
        })

        builder.addCase(signUp.rejected, (state, { payload }) => {

        })

    },
});

export const { } = authentication.actions;

export const selectUser = (state: RootState) => state?.userAuth?.user;
export const selectIsLoggedIn = (state: RootState) => state?.userAuth?.isLoggedIn;
export const selectIsLoading = (state: RootState) => state?.userAuth?.isLoading;

export const userSlice = authentication.reducer;