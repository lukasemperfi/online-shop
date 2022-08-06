import { CartItem } from "../store/cartSlice/models/CartItem";

export const calcTotalPrice = (items: CartItem[]) =>
    items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);

export const getItemExist = (items: CartItem[], id: string) =>
    items.find(obj => obj.id === id)

export const formatPrice = (number: number, currency = 'USD') => {
    const formattedPrice = number.toLocaleString('en-US',
        {
            style: 'currency',
            currency,
            minimumFractionDigits: 0
        })
    return formattedPrice
}
