import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../UI/Input/Input';
import { MainButton } from '../UI/MainButton/MainButton';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signUp } from '../../store/userSlice/userSlice';
import { getMessageFromErrorCode } from '../../firebase/utils/getMessageFromErrorCode';
import * as Styled from './SignUpForm.styled';
import { selectUserState } from '../../store/userSlice/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackgroundLocation } from '../../navigation/BackgroundLocation';
import { Path } from '../../navigation/routeNames';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

const schema = yup.object({
    firstName: yup.string()
        .required('First name is a required field')
        .matches(/^[A-Za-z\s]+$/, 'Please enter correct first name'),
    lastName: yup.string()
        .required('Last name is a required field')
        .matches(/^[A-Za-z\s]+$/, 'Please enter correct last name'),
    email: yup.string()
        .email('Please enter correct email')
        .required('Email is a required field'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required(),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords does not match')
})

export const SignUpForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch()
    const { errorCode, isLoading } = useAppSelector(selectUserState)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const state = location.state as BackgroundLocation ;
    const from = state?.backgroundLocation?.pathname || Path.Home;

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(signUp(data))
        navigate(from, {replace: true})
    }

    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            <Styled.ShowMessage showMessage={!!errorCode}>{getMessageFromErrorCode(errorCode)}</Styled.ShowMessage>
            <Input
                label='First name'
                containerStyle={Styled.formItemStyle}
                errorText={errors?.firstName?.message}
                {...register("firstName")}
            />
            <Input
                label='Last name'
                containerStyle={Styled.formItemStyle}
                errorText={errors?.lastName?.message}
                {...register("lastName")}
            />
            <Input
                label='Email'
                containerStyle={Styled.formItemStyle}
                errorText={errors?.email?.message}
                {...register("email")}
            />
            <Input
                label='Password'
                containerStyle={Styled.formItemStyle}
                type='Password'
                errorText={errors?.password?.message}
                {...register("password")}
            />
            <Input
                label='Confirm Password'
                containerStyle={Styled.formItemStyle}
                type='Password'
                errorText={errors?.passwordConfirmation?.message}
                {...register("passwordConfirmation")}
            />
            <MainButton
                isLoading={isLoading}
                type='submit'
            >
                Sign Up
            </MainButton>
        </Styled.Form>
    )
}
