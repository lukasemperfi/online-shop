import { ChangeEvent, useState } from 'react'
import styled, { css } from 'styled-components'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../Input/Input'
import { ButtonColors, MainButton } from '../MainButton/MainButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectIsLoading, signIn } from '../../store/userSlice';


const formItemStyle = css`
    margin-bottom: 20px;
`
const inputStyle = css`
    /* padding: 12px 48px 12px 20px; */
`

// const StyledOverlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 1000000;
//     background-color: black;
//     opacity: 0.5;
// `

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
    // const isLoading = useAppSelector(selectIsLoading)

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
