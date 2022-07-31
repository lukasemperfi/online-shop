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

export enum GenderSearchQuery {
    mens = 'mens',
    womens = 'womens',
}

interface filtersState {
    genderCategory: GenderSearchQuery,
    // shoesTypeCategories: ShoesTypeCategories[],
    // sortCategories: SortCategories[],
}



const initialState: filtersState = {
    genderCategory: GenderSearchQuery.womens,
    // shoesTypeCategories: [],
    // sortCategories: [],
}



const filters = createSlice({
    name: RootReducers.filters,
    initialState,
    reducers: {
        setGenderCategory: (state, action: PayloadAction<GenderSearchQuery>) => {
            state.genderCategory = action.payload;
          },
    },
    extraReducers: (builder) => {}

    });

export const { setGenderCategory } = filters.actions;

export const selectFiltersState = (state: RootState) => state?.filters;

export const filtersSlice = filters.reducer;