import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore } from "firebase/firestore";

import { UserInfo } from "./models/UserInfo";
import { Product } from "./models/Product";
import { createCollection } from "./utils/createCollection";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

export const usersCollection = createCollection<UserInfo>('users')
export const productsCollection =  createCollection<Product>('products')
export const genderCategoriesCollection =  createCollection<Product>('categories-gender')
