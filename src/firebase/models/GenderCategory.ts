import { GenderSearchQuery } from "../../store/filtersSlice";

export interface GenderCategory {
    id: string,
    name: string,
    searchQuery: GenderSearchQuery,
}