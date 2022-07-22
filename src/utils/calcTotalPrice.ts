import { CartItem } from "../store/cartSlice/models/CartItem";

export const calcTotalPrice = (items: CartItem[]) =>
    items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
