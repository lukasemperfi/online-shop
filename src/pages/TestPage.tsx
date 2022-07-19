import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, where, startAfter, limit, getDocs, doc, getDoc, QueryDocumentSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { db, getProductsCollection, productsCollection } from '../firebase/firebase';
import { useMatch, useParams } from 'react-router-dom';
import { Product } from '../firebase/models/Product';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchMore, fetchProductsByCategoryAndOrder, selectProducts, updateState } from '../store/productsSlice/productsSlice';

type Test = {
    gender: string,
    category: string,
}

export const TestPage = () => {
    const { gender, category } = useParams<Test>()
    // const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot>()
    // const [products, setProducts] = useState<DocumentData[]>([])
    // const [isEmpty, setIsEmpty] = useState(false)
    const products = useAppSelector(selectProducts)
    const dispatch = useAppDispatch()

    console.log(products);

    // const queryFilter = (gender?: string, category?: string) => {
    //     let q = query(productsCollection, orderBy('price', 'desc'), limit(2))

    //     if (gender) {
    //         q = query(q, where('gender', '==', gender));
    //     }

    //     if (category) {
    //         q = query(q, where('category', '==', category));
    //     }

    //     return q

    // }

    // const updateState = (documentSnapshots: QuerySnapshot) => {
    //     const isDocumentSnapshotsEmpty = documentSnapshots.size === 0;
        
    //     if (!isDocumentSnapshotsEmpty) {
    //         const products = documentSnapshots.docs.map(product => product.data())
    //         const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    //         console.log('in update');
            
    //         setProducts(listOfProducts => [...listOfProducts, ...products])
    //         setLastDoc(lastDoc)
    //     } 

    // }

    // const getOrderByName = async (gender?: string, category?: string) => {
    //     try {

    //         const first = queryFilter(gender, category)
    //         const documentSnapshots = await getDocs(first);

    //         updateState(documentSnapshots)


    //     } catch (error) {

    //         console.log(error);

    //     }

    // }

    // const fetchMore = async (gender?: string, category?: string) => {

    //     try {

    //         const q = queryFilter(gender, category)
    //         const next = query(q, startAfter(lastDoc))
    //         const documentSnapshots = await getDocs(next);

    //         updateState(documentSnapshots)
           

    //     } catch (error) {

    //         console.log(error);

    //     }

    // }


    const loadMore = () => {
        // dispatch(fetchMore({gender, category}))
    }

    useEffect(() => {
        // console.log(gender, category);
        // getOrderByName(gender, category)
        // dispatch(fetchProductsByCategoryAndOrder({gender, category}))
    }, [])

    return (
        <div>TestPage
            <button onClick={loadMore}>load more</button>
        </div>
    )
}
