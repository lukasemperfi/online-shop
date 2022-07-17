import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootReducers } from "../rootReducers";
import { Product } from "./models/Product";

interface initialStateProps {
    products: Product[];
    errorMessage?: string,
    isLoading?: boolean,
}

const initialState: initialStateProps = {
    products: [],
    errorMessage: '',
    isLoading: false,
}

export const addProduct = createAsyncThunk<void, void, { rejectValue: string }>(
    `${RootReducers.products}/addProduct`,
    async (_, { rejectWithValue }) => {
        try {


        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);


const products = createSlice({
    name: RootReducers.products,
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // builder.addCase(userStateChanged.pending, (state) => {
           
        // })

        // builder.addCase(userStateChanged.fulfilled, (state, { payload }) => {


        // builder.addCase(userStateChanged.rejected, (state, { payload }) => {

        // })


    },
});

export const { } = products.actions;

export const productsSlice = products.reducer;