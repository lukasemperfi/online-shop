import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Input } from '../Input/Input'
import { MainButton } from '../MainButton/MainButton'
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { ref } from 'firebase/storage';
import { storage } from '../../firebase/firebase';

const Form = styled.form`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const FormTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
`
const Category = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: auto;
`

const CategoryLabel = styled.label`
    font-weight: 500;
`

const TextArea = styled.textarea`
    resize: vertical;
    border: 1px solid;
`

interface FormData {
    name: string;
    price: number;
    files: FileList;
}

const filesTypes = ['image/jpeg', 'image/png']

const schema = yup.object({
    name: yup.string()
        .required('Name is a required field')
        .max(70, 'Max length 70 characters'),
    price: yup.number()
        .required()
        .typeError('You must specify a number')
        .test(
            "maxDigitsAfterDecimal",
            "Number field must have 2 digits after decimal or less",
            (number) => /^\d+(\.\d{1,2})?$/.test(String(number))
        ),
    files: yup.mixed()
        .test('required', 'Please select a file', (value: FileList): boolean => {                     
            return Boolean(value && value.length)
        })
        .test('fileSize', 'Too large', (value: FileList): boolean => {
            return Boolean(value && value[0]?.size <= 2000000)
        })
        .test('type', 'Support only jpeg or png', (value: FileList): boolean => {
            return Boolean(value && filesTypes.includes(value[0]?.type))
        })
})

export const AddNewProductForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
        uploadImage(data.files[0])
    }

    const uploadImage = (imageUpload: File) => {
        if (imageUpload) {
            console.log(`${imageUpload.name + uuidv4()}`);
            
            // const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`)
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>ADD NEW PRODUCT</FormTitle>
            {/* <Category>
                <CategoryLabel htmlFor="category">Category</CategoryLabel>
                <select name="category" id="category">
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                </select>
            </Category> */}
            <Input
                label='Name'
                errorText={errors?.name?.message}
                {...register("name")}
            />
            <Input
                label='Price'
                errorText={errors?.price?.message}
                {...register("price")}
            />
            <Input
                label='Image URL'
                type='file'
                errorText={errors?.files?.message}
                {...register("files")}
            />
            <MainButton type='submit'>ADD PRODUCT</MainButton>
        </Form>
    )
}
