import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItemExist, calcTotalPrice } from "../../utils/redux";
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
            const itemExists = getItemExist(state.items, item.id)

            if (itemExists) {
                itemExists.count++
            } else {
                state.items.push({ ...item, count: 1 })
            }

            state.totalPrice = calcTotalPrice(state.items)

        },
        minusItem: (state, action: PayloadAction<string>) => {
            const { payload: id } = action
            const itemExists = getItemExist(state.items, id)

            if (itemExists) {
                itemExists.count--
            }

            state.totalPrice = calcTotalPrice(state.items);

        },

        plusItem: (state, action: PayloadAction<string>) => {
            const { payload: id } = action
            const itemExists = getItemExist(state.items, id)

            if (itemExists) {
                itemExists.count++
            }

            state.totalPrice = calcTotalPrice(state.items)

        },
        deleteItem(state, action: PayloadAction<string>) {
            const { payload: id } = action

            state.items = state.items.filter((obj) => obj.id !== id);

            state.totalPrice = calcTotalPrice(state.items);
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
})

export const { addItem, minusItem, plusItem, deleteItem, clearCart } = cart.actions

export const cartSlice = cart.reducer;
