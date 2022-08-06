import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootReducers } from "../rootReducers";

export enum GenderSearchQuery {
    mens = 'mens',
    womens = 'womens',
}

interface filtersState {
    genderCategory: GenderSearchQuery,
}

const initialState: filtersState = {
    genderCategory: GenderSearchQuery.womens,
}

const filters = createSlice({
    name: RootReducers.filters,
    initialState,
    reducers: {
        setGenderCategory: (state, action: PayloadAction<GenderSearchQuery>) => {
            state.genderCategory = action.payload;
        },
    },
});

export const { setGenderCategory } = filters.actions;

export const filtersSlice = filters.reducer;
