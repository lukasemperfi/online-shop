import { Product } from "../../../firebase/models/Product";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    count: number;
}