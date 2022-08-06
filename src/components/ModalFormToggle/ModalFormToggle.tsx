import { useState } from 'react';

import { useAppSelector } from '../../hooks/redux';
import { selectIsLoading } from '../../store/userSlice/selectors';
import { LoginForm } from '../LoginForm/LoginForm';
import { MainPopup, MainPopupProps } from '../MainPopup/MainPopup';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { ButtonColors } from '../UI/MainButton/MainButton.styled';
import * as Styled from './ModalFormToggle.styled';

export const ModalFormToggle = ({
    isOpened,
    onClose
}: MainPopupProps) => {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const isLoading = useAppSelector(selectIsLoading)

    const handleisLoginForm = () => {
        setIsLoginForm(!isLoginForm)
    }

    return (
        <MainPopup
            isOpened={isOpened}
            onClose={onClose}
        >
            <Styled.Container>
                {(isLoading && isOpened) && <Styled.Overlay />}
                <Styled.Title>
                    {isLoginForm ? 'LOGIN' : 'REGISTRATION'}
                </Styled.Title>
                {isLoginForm ? <LoginForm /> : <SignUpForm />}
                <Styled.Links>
                    <Styled.RegButton
                        color={ButtonColors.text}
                        onClick={handleisLoginForm}
                    >
                        {isLoginForm ? 'Registration' : 'Login'}
                    </Styled.RegButton>
                </Styled.Links>
            </Styled.Container>
        </MainPopup>
    )
}
