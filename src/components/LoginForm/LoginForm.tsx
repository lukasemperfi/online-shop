import { ChangeEvent, useState } from 'react'
import { css } from 'styled-components'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../Input/Input'
import { ButtonColors, MainButton } from '../MainButton/MainButton'
import { useAppDispatch } from '../../hooks/redux';
import { signIn } from '../../store/authSlice';


const formItemStyle = css`
    margin-bottom: 20px;
`
const inputStyle = css`
    /* padding: 12px 48px 12px 20px; */
`

interface FormData {
    email: string;
    password: string;
};

const schema = yup.object({
    email: yup.string().email('Please enter correct email').required('Email is a required field'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required(),
})

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });

const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data)
    dispatch(signIn(data))
}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Email'
                placeholder='Email'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.email?.message}
                {...register("email")}
            />
            <Input
                label='Password'
                placeholder='Password'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.password?.message}
                {...register("password")}
            />
            <MainButton styles={formItemStyle} type='submit'>Log In</MainButton>
            <MainButton color={ButtonColors.secondary} styles={formItemStyle}>SIGN IN WITH GOOGLE</MainButton>
        </form>
    )
}
