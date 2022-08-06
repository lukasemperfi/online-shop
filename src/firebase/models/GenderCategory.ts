import { GenderSearchQuery } from "../../store/filtersSlice/filtersSlice";

export interface GenderCategory {
    id: string,
    name: string,
    searchQuery: GenderSearchQuery,
}
