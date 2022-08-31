import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { BackgroundLocation } from '../../navigation/BackgroundLocation';
import { Path } from '../../navigation/routeNames';
import { selectIsLoading } from '../../store/userSlice/selectors';
import { LoginForm } from '../LoginForm/LoginForm';
import { MainPopup } from '../MainPopup/MainPopup';
import { StyledLink } from '../StyledLink/StyledLink.styled';
import * as Styled from './LoginFormModal.styled';

export const LoginFormModal = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoading = useAppSelector(selectIsLoading)

    const state = location.state as BackgroundLocation ;
    const from = state?.backgroundLocation?.pathname || Path.Home;

    const onClose = () => {
        navigate(from);
    }

    return (
        <MainPopup
            isOpened
            onClose={onClose}
        >
            <Styled.Container>
                {isLoading  && <Styled.Overlay />}
                <Styled.Title>
                    LOGIN
                </Styled.Title>
                <LoginForm />
                <StyledLink to={Path.Registration} state={state} color='black'>Registration</StyledLink>
            </Styled.Container>
        </MainPopup>
    )
}
