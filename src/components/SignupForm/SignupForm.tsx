import { SubmitHandler, useForm } from 'react-hook-form';
import { css } from 'styled-components'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../Input/Input'
import { MainButton } from '../MainButton/MainButton'

const formItemStyle = css`
    margin-bottom: 20px;
`
const inputStyle = css`
    /* padding: 12px 48px 12px 20px; */
`

interface FormData {
    fullName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

const schema = yup.object({
    fullName: yup.string().required('Full name is a required field').matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms,'Please enter correct full name'),
    email: yup.string().email('Please enter correct email').required('Email is a required field'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords does not match')
})

export const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
            mode: 'all',
            resolver: yupResolver(schema)
        });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Full name'
                placeholder='Full name'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.fullName?.message}
                {...register("fullName")}
            />
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
            <Input
                label='Confirm Password'
                placeholder='Confirm Password'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText={errors?.passwordConfirmation?.message}
                {...register("passwordConfirmation")}
            />
            <MainButton styles={formItemStyle} type='submit'>Sign Up</MainButton>
        </form>
    )
}
