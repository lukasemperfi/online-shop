import { ChangeEvent, useState } from 'react'
import styled, { css } from 'styled-components'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../Input/Input'
import { ButtonColors, MainButton } from '../MainButton/MainButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectIsLoading, selectUserState, signIn } from '../../store/userSlice';
import { Loader } from '../Loaders/Loader';
import { Colors } from '../../styles/styles';
import { getMessageFromErrorCode } from '../../firebase/utils/getMessageFromErrorCode';
import { useNavigate } from 'react-router-dom';


interface StyledLogginProps {
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

const StyledShowMessage = styled.div<StyledLogginProps>`
    height: 0;
    visibility: hidden;
    opacity: 0;
    padding: 0;
    transition: 0.3s;
    overflow: hidden;

    ${({showMessage}) => showMessage && showMessageActive }
`
const StyledInput = styled(Input)<StyledLogginProps>`
    background-color: red;
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
    const navigate = useNavigate()
    const { errorCode, isLoading } = useAppSelector(selectUserState)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const isError = !!errorCode
    // console.log(errorCode);
    
    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(signIn(data))
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledShowMessage showMessage={isError}>{getMessageFromErrorCode(errorCode)}</StyledShowMessage>
            <Input
                label='Email'
                errorText={errors?.email?.message}
                placeholder='admin@gmail.com'
                {...register("email")}
            />
            <Input
                label='Password'
                type='Password'
                placeholder='adminadmin'
                errorText={errors?.password?.message}
                {...register("password")}
            />
            <MainButton type='submit' isLoading={isLoading}>Log In</MainButton>
        </StyledForm>
    )
}
