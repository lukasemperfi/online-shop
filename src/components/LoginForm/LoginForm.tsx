import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../UI/Input/Input';
import { MainButton } from '../UI/MainButton/MainButton';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signIn } from '../../store/userSlice/userSlice';
import { getMessageFromErrorCode } from '../../firebase/utils/getMessageFromErrorCode';
import * as Styled from './LoginForm.styled';
import { selectUserState } from '../../store/userSlice/selectors';

interface FormData {
    email: string;
    password: string;
};

const schema = yup.object({
    email: yup.string()
        .email('Please enter correct email')
        .required('Email is a required field'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required(),
})

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const { errorCode, isLoading } = useAppSelector(selectUserState)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(signIn(data))
    }

    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            <Styled.ShowMessage showMessage={!!errorCode}>{getMessageFromErrorCode(errorCode)}</Styled.ShowMessage>
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
            <MainButton
                type='submit'
                isLoading={isLoading}
            >
                Log In
            </MainButton>
        </Styled.Form>
    )
}
