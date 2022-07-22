import { CartItem } from "../store/cartSlice/models/CartItem";

export const calcTotalPrice = (items: CartItem[]) =>
    items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);

export const getItemExist = (items: CartItem[], id: string) => items.find(obj => obj.id === id)
