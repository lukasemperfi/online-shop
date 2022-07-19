import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs, limit, orderBy, query, QueryDocumentSnapshot, QuerySnapshot, setDoc, startAfter, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { productsCollection, storage } from "../../firebase/firebase";
import { Product } from "../../firebase/models/Product";
import { RootReducers } from "../rootReducers";
import { AppDispatch, RootState } from "../store";

interface initialStateProps {
    products: Product[];
    errorMessage?: string,
    isLoading?: boolean,
    pagination: {
        lastDoc: QueryDocumentSnapshot | null ;
        isEmptyData: boolean;
    }
}

const initialState: initialStateProps = {
    products: [],
    errorMessage: '',
    isLoading: false,
    pagination: {
        lastDoc: null,
        isEmptyData: false,
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
// );

const queryFilter = (gender?: string, category?: string) => {
    let q = query(productsCollection, orderBy('price', 'desc'), limit(2))

    if (gender) {
        q = query(q, where('gender', '==', gender));
    }

    if (category) {
        q = query(q, where('category', '==', category));
    }

    return q

}

interface CategoryData {
    gender?: string;
    category?: string;
}

export const fetchProductsByCategoryAndOrder = createAsyncThunk<void, CategoryData, { rejectValue: string, dispatch: AppDispatch }>(
    `${RootReducers.products}/fetchProductsByCategoryAndOrder`,
    async ({ gender, category }, { rejectWithValue, dispatch }) => {

        try {
            const first = queryFilter(gender, category)
            const documentSnapshots = await getDocs(first);

           dispatch(updateState(documentSnapshots))


        } catch (error: any) {
            return rejectWithValue(error.message as string);
        }
    }
);

export const fetchMore = createAsyncThunk<void, CategoryData, { rejectValue: string, dispatch: AppDispatch, state: RootState }>(
    `${RootReducers.products}/fetchMore`,
    async ({ gender, category }, { rejectWithValue, dispatch, getState }) => {
        const state = getState()
        const lastDoc = state.products.pagination.lastDoc
        
        try {
            
            const q = queryFilter(gender, category)
            const next = query(q, startAfter(lastDoc))
            const documentSnapshots = await getDocs(next);

           dispatch(updateState(documentSnapshots))


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
        },
        updateState: (state, {payload: documentSnapshots}: {payload: QuerySnapshot<Product>}) => {
            const isDocumentSnapshotsEmpty = documentSnapshots.size === 0;
        
            if (!isDocumentSnapshotsEmpty) {
                const products = documentSnapshots.docs.map(product => product.data())
                const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1];
                console.log('in update');
                
                state.products.push(...products)
                state.pagination.lastDoc = lastDoc
            } else {
                state.pagination.isEmptyData = true
            }


        }
    },
    extraReducers: (builder) => {

        // builder.addCase(getProducts.pending, (state) => {
        //     state.isLoading = true
        // })

        // builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        //     state.isLoading = false
        //     state.products = payload
        // })

        // builder.addCase(getProducts.rejected, (state, { payload }) => {
        //     state.errorMessage = payload
        // })


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

export const { setProducts, updateState } = products.actions;

export const selectIsProductLoading = (state: RootState) => state?.products?.isLoading
export const selectProducts = (state: RootState) => state?.products?.products

export const productsSlice = products.reducer;