import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, usersCollection } from "../firebase/firebase";
import { GenderCategory } from "../firebase/models/GenderCategory";
import { ShoesTypeCategories } from "../firebase/models/ShoesTypeCategories";
import { SortCategories } from "../firebase/models/SortCategories";
import { UserInfo } from "../firebase/models/UserInfo";
import { RootReducers } from "./rootReducers";

import { RootState } from "./store";

interface filtersState {
    GenderCategory: GenderCategory[],
    shoesTypeCategories: ShoesTypeCategories[],
    sortCategories: SortCategories[],
}



const initialState: filtersState = {
    GenderCategory: [],
    shoesTypeCategories: [],
    sortCategories: [],
}

export const getGenderCategory = createAsyncThunk<void, void, { rejectValue: string }>(
    `${RootReducers.filters}/getGenderCategory`,
    async (_, { rejectWithValue }) => {
        try {


        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);


const filters = createSlice({
    name: RootReducers.filters,
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(getGenderCategory.pending, (state) => {

        })

        builder.addCase(getGenderCategory.fulfilled, (state, { payload }) => {

        })
        builder.addCase(getGenderCategory.rejected, (state, { payload }) => {

        })

    }

    });

export const { } = filters.actions;

export const selectUser = (state: RootState) => state?.filters;

export const filtersSlice = filters.reducer;