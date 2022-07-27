import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../Input/Input'
import { MainButton } from '../MainButton/MainButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUserState, signUp } from '../../store/userSlice';
import { Colors } from '../../styles/styles';
import { getMessageFromErrorCode } from '../../firebase/utils/getMessageFromErrorCode';

const formItemStyle = css`
    margin-bottom: 20px;
`
const inputStyle = css`
    /* padding: 12px 48px 12px 20px; */
`

interface StyledSignupProps {
    showMessage?: boolean,
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const showMessageActive = css`
    background-color: ${Colors.errorMessage};
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 5px 0;
    transition: 0.3s;
`

const StyledShowMessage = styled.div<StyledSignupProps>`
    height: 0;
    visibility: hidden;
    opacity: 0;
    padding: 0;
    transition: 0.3s;
    overflow: hidden;

    ${({showMessage}) => showMessage && showMessageActive }
`

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

const schema = yup.object({
    firstName: yup.string().required('First name is a required field').matches(/^[A-Za-z\s]+$/, 'Please enter correct first name'),
    lastName: yup.string().required('Last name is a required field').matches(/^[A-Za-z\s]+$/, 'Please enter correct last name'),
    email: yup.string().email('Please enter correct email').required('Email is a required field'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords does not match')
})

export const SignUpForm = () => {
    const dispatch = useAppDispatch()
    const { errorCode, isLoading } = useAppSelector(selectUserState)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(signUp(data))
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledShowMessage showMessage={!!errorCode}>{getMessageFromErrorCode(errorCode)}</StyledShowMessage>
            <Input
                label='First name'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.firstName?.message}
                {...register("firstName")}
            />
            <Input
                label='Last name'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.lastName?.message}
                {...register("lastName")}
            />
            <Input
                label='Email'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.email?.message}
                {...register("email")}
            />
            <Input
                label='Password'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.password?.message}
                {...register("password")}
            />
            <Input
                label='Confirm Password'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.passwordConfirmation?.message}
                {...register("passwordConfirmation")}
            />
            <MainButton styles={formItemStyle} isLoading={isLoading} type='submit'>Sign Up</MainButton>
        </StyledForm>
    )
}
