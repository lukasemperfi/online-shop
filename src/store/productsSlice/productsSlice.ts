import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, OrderByDirection, query, QueryDocumentSnapshot, QuerySnapshot, setDoc, startAfter, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { productsCollection, storage } from "../../firebase/firebase";
import { Product } from "../../firebase/models/Product";
import { RootReducers } from "../rootReducers";
import { AppDispatch, RootState } from "../store";

interface initialStateProps {
    products: Product[];
    product?: Product | null,
    errorMessage?: string,
    isLoading?: boolean,
    pagination: {
        lastDoc: QueryDocumentSnapshot | null;
        isEmptyData: boolean;
        isFetchingMore: boolean;
    }
}

const initialState: initialStateProps = {
    products: [],
    product: null,
    errorMessage: '',
    isLoading: false,
    pagination: {
        lastDoc: null,
        isEmptyData: false,
        isFetchingMore: false,
    }
}

interface ProductData {
    name: string;
    price: number;
    imageFile: File;
}

// export const getProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
//     `${RootReducers.products}/getProducts`,
//     async (_, { rejectWithValue }) => {
//         try {
//             const snapshot = await getDocs(productsCollection)
//             const products: Product[] = []

//             snapshot.docs.forEach((doc) => {
//                 products.push({ ...doc.data() })
//             })

//             return products

//         } catch (error: any) {
//             return rejectWithValue(error.message as string);
//         }
//     }
// );,

const queryFilter = (gender?: string, category?: string, order?: OrderByDirection) => {
    let q = query(productsCollection, orderBy('price', order),  limit(2))

    if (gender) {
        q = query(q, where('gender', '==', gender));
    }

    if (category) {
        q = query(q, where('type', '==', category));
    }

    return q

}

interface CategoryData {
    gender?: string;
    category?: string;
    order?: OrderByDirection;
}

export const fetchProductById = createAsyncThunk<Product | undefined, string | undefined, { rejectValue: string }>(
    `${RootReducers.products}/fetchProductById`,
    async (id, { rejectWithValue }) => {
        try {
            const docRef = doc(productsCollection, id)
            const document = await getDoc(docRef)
            
            return document.data()

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const fetchProductsByCategoryAndOrder = createAsyncThunk<Product[], CategoryData, { rejectValue: string, dispatch: AppDispatch }>(
    `${RootReducers.products}/fetchProductsByCategoryAndOrder`,
    async ({ gender, category, order }, { rejectWithValue, dispatch }) => {

        try {
            const first = queryFilter(gender, category, order)
            const documentSnapshots = await getDocs(first);

            dispatch(updateState(documentSnapshots))

            const products = documentSnapshots.docs.map(product => product.data())

            return products

        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const fetchMore = createAsyncThunk<Product[], CategoryData, { rejectValue: string, dispatch: AppDispatch, state: RootState }>(
    `${RootReducers.products}/fetchMore`,
    async ({ gender, category, order }, { rejectWithValue, dispatch, getState }) => {
        const state = getState()
        const lastDoc = state.products.pagination.lastDoc

        try {

            const q = queryFilter(gender, category, order)
            const next = query(q, startAfter(lastDoc))
            const documentSnapshots = await getDocs(next);

            dispatch(updateState(documentSnapshots))

            const products = documentSnapshots.docs.map(product => product.data())

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

            // await setDoc(docRef, {
            //     id: docRef.id,
            //     name: name,
            //     price: price,
            //     image: url,
            // });

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
        },
        updateState: (state, { payload: documentSnapshots }: { payload: QuerySnapshot<Product> }) => {
            const isDocumentSnapshotsEmpty = documentSnapshots.size === 0;

            if (!isDocumentSnapshotsEmpty) {    
                const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1];
                // console.log('in update');
                state.pagination.lastDoc = lastDoc
            } else {
                state.pagination.isEmptyData = true
            }


        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchProductsByCategoryAndOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchProductsByCategoryAndOrder.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.products = payload      
        })

        builder.addCase(fetchProductsByCategoryAndOrder.rejected, (state, { payload }) => {
            state.errorMessage = payload
        })
        builder.addCase(fetchMore.pending, (state) => {
            state.pagination.isFetchingMore = true
        })

        builder.addCase(fetchMore.fulfilled, (state, { payload }) => {
            state.pagination.isFetchingMore = false
            state.products.push(...payload)
        })

        builder.addCase(fetchMore.rejected, (state, { payload }) => {
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

        builder.addCase(fetchProductById.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.product = payload
        })

        builder.addCase(fetchProductById.rejected, (state, { payload }) => {
            state.errorMessage = payload
        })


    },
});

export const { setProducts, updateState } = products.actions;

export const selectProductsState = (state: RootState) => state?.products
export const selectIsProductLoading = (state: RootState) => state?.products?.isLoading
export const selectProducts = (state: RootState) => state?.products?.products
export const selectProduct = (state: RootState) => state?.products?.product


export const productsSlice = products.reducer;