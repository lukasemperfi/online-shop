import { RootState } from "../store";
import { CartItem } from "./models/CartItem";

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemsAmount = (state: RootState) =>
    state.cart.items.reduce((sum: number, item: CartItem) => sum + item.count, 0);