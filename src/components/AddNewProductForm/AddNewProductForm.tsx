import React, { ChangeEvent, FC, useState } from 'react'
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
import { FileInput } from '../FileInput/FileInput';
import { useAppDispatch } from '../../hooks/redux';
import { addProduct } from '../../store/productsSlice/productsSlice';
import { Select } from '../Select/Select';

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

interface AddNewProductFormProps {
    onSubmit?: () => void;
}

const genderOptions = [
    { value: 'mens', name: 'Mens' },
    { value: 'womens', name: 'Womens' },
]

const typeOptions = [
    { value: 'boots', name: 'Boots' },
    { value: 'shoes', name: 'Shoes' },
    { value: 'sandals', name: 'Sandals' },
]

export const AddNewProductForm: FC<AddNewProductFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });
    const dispatch = useAppDispatch()
    const [gendervalue, setGenderValue] = useState('mens')
    const [typeValue, setTypeValue] = useState('boots')

    const onSubmitForm: SubmitHandler<FormData> = (data) => {
        const product = {
            name: data.name,
            price: data.price,
            imageFile: data.files[0],
            gender: 'string',
            type: 'string',
        }
        dispatch(addProduct(product))
        if (onSubmit) {
            onSubmit()
        }
    }

    const handleOnChangeGender = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenderValue(event.target.value)
    }
    const handleOnChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
        setTypeValue(event.target.value)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmitForm)}>
            <FormTitle>ADD NEW PRODUCT</FormTitle>
            <Category>
                <CategoryLabel>Gender</CategoryLabel>
                <Select
                    value={gendervalue}
                    options={genderOptions}
                    onChange={handleOnChangeGender}
                />
                <CategoryLabel>Type</CategoryLabel>
                <Select
                    value={typeValue}
                    options={typeOptions}
                    onChange={handleOnChangeType}
                />
            </Category>
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
            <FileInput
                label='Image'
                errorText={errors?.files?.message}
                {...register("files")}
            />
            <MainButton type='submit'>ADD PRODUCT</MainButton>
        </Form>
    )
}
