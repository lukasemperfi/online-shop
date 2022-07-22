import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { RootReducers } from "../rootReducers";
import { CartItem } from "./models/CartItem";

interface CartState {
    items: CartItem[],
    totalPrice: number,
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
}

const cart = createSlice({
    name: RootReducers.cart,
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const { payload: item } = action
            const itemExists = state.items.find(obj => obj.id === item.id)

            if (itemExists) {
                itemExists.count++
            } else {
                state.items.push({ ...item, count: 1 })
            }
            
            state.totalPrice = calcTotalPrice(state.items)
            
        }
    },
})

export const cartSlice = cart.reducer;
