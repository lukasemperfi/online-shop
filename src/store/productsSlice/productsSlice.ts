import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { productsCollection, storage } from "../../firebase/firebase";
import { Product } from "../../firebase/models/Product";
import { RootReducers } from "../rootReducers";
import { RootState } from "../store";

interface initialStateProps {
    products: Product[];
    errorMessage?: string,
    isLoading?: boolean,
}

const initialState: initialStateProps = {
    products: [],
    errorMessage: '',
    isLoading: false,
}

interface ProductData {
    name: string;
    price: number;
    imageFile: File;
}

export const getProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
    `${RootReducers.products}/getProducts`,
    async (_, { rejectWithValue }) => {
        try {
            const snapshot = await getDocs(productsCollection)
            const products: Product[] = []

            snapshot.docs.forEach((doc) => {
                products.push({ ...doc.data() })
            })

            return products

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const addProduct = createAsyncThunk<void, ProductData, { rejectValue: string }>(
    `${RootReducers.products}/addProduct`,
    async ({ name, price, imageFile }, { rejectWithValue, requestId }) => {
        try {
            const imageRef = ref(storage, `products-images/${imageFile.name + requestId}`)
            const snapshot = await uploadBytes(imageRef, imageFile)
            const url = await getDownloadURL(snapshot.ref)

            const docRef = doc(productsCollection)

            await setDoc(docRef, {
                id: docRef.id,
                name: name,
                price: price,
                image: url,
            });

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const deleteProduct = createAsyncThunk<void, string, { rejectValue: string }>(
    `${RootReducers.products}/deleteProduct`,
    async (id, { rejectWithValue }) => {
        try {

            const docRef = doc(productsCollection, id)

            await deleteDoc(docRef)

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);


const products = createSlice({
    name: RootReducers.products,
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            console.log('done');
            
            state.products = action.payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.products = payload
        })

        builder.addCase(getProducts.rejected, (state, { payload }) => {
            state.errorMessage = payload
        })

        builder.addCase(addProduct.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(addProduct.fulfilled, (state, { payload }) => {
            state.isLoading = false
        })

        builder.addCase(addProduct.rejected, (state, { payload }) => {
            state.errorMessage = payload
        })


    },
});

export const { setProducts } = products.actions;

export const selectIsProductLoading = (state: RootState) => state?.products?.isLoading
export const selectProducts = (state: RootState) => state?.products?.products

export const productsSlice = products.reducer;