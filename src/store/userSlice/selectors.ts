import { RootState } from "../store";

export const selectUserState = (state: RootState) => state?.userAuth;
export const selectUser = (state: RootState) => state?.userAuth?.user;
export const selectIsLoggedIn = (state: RootState) => state?.userAuth?.isLoggedIn;
export const selectIsLoading = (state: RootState) => state?.userAuth?.isLoading;