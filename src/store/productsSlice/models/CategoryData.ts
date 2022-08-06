import { OrderByDirection } from "firebase/firestore";

export interface CategoryData {
    gender?: string;
    category?: string;
    order?: OrderByDirection;
}
