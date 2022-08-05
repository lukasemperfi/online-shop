import { ChangeEvent, FC, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '../UI/Input/Input';
import { MainButton } from '../UI/MainButton/MainButton';
import { FileInput } from '../UI/FileInput/FileInput';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addProduct, selectProductsState } from '../../store/productsSlice/productsSlice';
import { Select } from '../UI/Select/Select';
import * as Styled from './AddNewProductForm.styled';
import { FormData } from './models/FormData';
import { GenderSearchQuery } from '../../store/filtersSlice';

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

const genderOptions = [
    { value: GenderSearchQuery.mens, name: 'Mens' },
    { value: GenderSearchQuery.womens, name: 'Womens' },
]

const typeOptions = [
    { value: 'boots', name: 'Boots' },
    { value: 'shoes', name: 'Shoes' },
    { value: 'sandals', name: 'Sandals' },
]

interface AddNewProductFormProps {
    onSubmit?: () => void;
}

export const AddNewProductForm: FC<AddNewProductFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(selectProductsState)
    const [gendervalue, setGenderValue] = useState(GenderSearchQuery.mens)
    const [typeValue, setTypeValue] = useState('boots')

    const onSubmitForm: SubmitHandler<FormData> = (data) => {
        const product = {
            name: data.name,
            price: data.price,
            imageFile: data.files[0],
            gender: gendervalue,
            type: typeValue,
        }
        dispatch(addProduct(product))
        if (onSubmit) {
            onSubmit()
        }
    }

    const handleOnChangeGender = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenderValue(event.target.value as GenderSearchQuery)
    }
    const handleOnChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
        setTypeValue(event.target.value)
    }

    return (
        <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
            <Styled.FormTitle>ADD NEW PRODUCT</Styled.FormTitle>
            <Styled.Category>
                <Styled.CategoryLabel>Gender</Styled.CategoryLabel>
                <Select
                    value={gendervalue}
                    options={genderOptions}
                    onChange={handleOnChangeGender}
                />
                <Styled.CategoryLabel>Type</Styled.CategoryLabel>
                <Select
                    value={typeValue}
                    options={typeOptions}
                    onChange={handleOnChangeType}
                />
            </Styled.Category>
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
            <MainButton type='submit' isLoading={isLoading}>ADD PRODUCT</MainButton>
        </Styled.Form>
    )
}
