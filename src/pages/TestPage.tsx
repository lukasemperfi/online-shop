import React, { useEffect, useState, MouseEvent, MouseEventHandler, ChangeEventHandler, ChangeEvent } from 'react'
import { collection, query, orderBy, where, startAfter, limit, getDocs, doc, getDoc, QueryDocumentSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { db, getProductsCollection, productsCollection } from '../firebase/firebase';
import { useMatch, useParams } from 'react-router-dom';
import { Product } from '../firebase/models/Product';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchMore, fetchProductsByCategoryAndOrder, selectProducts, updateState } from '../store/productsSlice/productsSlice';
import { AdaptiveImage } from '../components/Image/AdaptivImage';
import { NoDataFound } from '../components/NoDataFound/NoDataFound';
import { PageContainer } from '../components/PageContainer/PageContainer';
import iamgeNot from '../assets/no-product-found.jpg';
import { maxTextLines } from '../styles/mixins.styled'

import styled, { css } from 'styled-components';
import { CartItem } from '../components/CartItem/CartItem';
import { IconButton } from '../components/IconButton/IconButton';
import { Input } from '../components/Input/Input';
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { ReactComponent as MinusIcon } from '../assets/minus.svg'
import { ReactComponent as TrashIcon } from '../assets/trash.svg'
import arrowIcon from '../assets/down-arrow.png'
import bigImg from '../assets/bigImg.jpg'

import { Breakpoints, Colors } from '../styles/styles';
import { textCut } from '../styles/helpers';
import { DropdownMenu } from '../components/DropdownMenu/DropdownMenu';
import { DropdownMenuItem } from '../components/DropdownMenu/DropdownMenuItem';
import { DropdownMenuItemProps } from '../components/UserMenu/UserMenu';
import { PopoverPlacement } from '../hooks/usePopoverPosition/models/PopoverPlacement';
import { Select } from '../components/Select/Select';
import { ProductCard } from '../components/ProductCard/ProductCard';


const product = {
    name: 'test',
    image: bigImg,
    // image: '',
    price: 2434,
    id: 'dgsfgdfghdfh'
}

const options = [
    { value: 'one', name: 'Price (Low to High)' },
    { value: 'two', name: 'Price (High to Low)' },
    { value: 'three', name: 'Three' },
]



export const TestPage = () => {
    const [value, setValue] = useState('one')

    // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setValue(event.target.value)
    // }

    const [files, setFiles] = useState<any>()
    const dispatch = useAppDispatch()
  
    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //   setFiles(event.target.files)
    // }
  
    function generateRandom(min = 100, max = 300) {
  
      // find diff
      let difference = max - min;
  
      // generate random number 
      let rand = Math.random();
  
      // multiply with difference 
      rand = Math.floor( rand * difference);
  
      // add with min value 
      rand = rand + min;
  
      return rand;
  }
  
  const wait = async (id: number) => {
         setTimeout(() => {
          console.log(id)
        }, 1000)
  }
  
    useEffect(() => {
      if (files) {
        // onSubmitForm(files)
        console.log(files);
        
      }
    }, [files])
  
    const onSubmitForm = async (files: any) => {
  
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
  
        const product = {
          name: file.name.slice(0, file.name.length - 4),
          price: generateRandom(),
          imageFile: file,
          gender: 'mens',
          type: 'sandals',
        }
  
        // console.log(index);
        
        //  await dispatch(addProduct(product))
  
      }
  
      
     
  
    }

    return (

        <PageContainer>

            <AdaptiveImage
                src={bigImg}
                maxWidth='500px'
            />
        </PageContainer>
    )
}

