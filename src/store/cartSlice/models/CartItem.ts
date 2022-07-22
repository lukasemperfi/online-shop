import { Product } from "../../../firebase/models/Product";

export interface CartItem extends Product{
    count: number;
}