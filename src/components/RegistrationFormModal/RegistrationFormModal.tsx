import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { BackgroundLocation } from '../../navigation/BackgroundLocation';
import { Path } from '../../navigation/routeNames';
import { selectIsLoading } from '../../store/userSlice/selectors';
import { MainPopup } from '../MainPopup/MainPopup';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { StyledLink } from '../StyledLink/StyledLink.styled';
import * as Styled from './RegistrationFormModal.styled';

export const RegistrationFormModal = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoading = useAppSelector(selectIsLoading)

    const state = location.state as BackgroundLocation;
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
                {isLoading && <Styled.Overlay />}
                <Styled.Title>
                    REGISTRATION
                </Styled.Title>
                <SignUpForm />
                <StyledLink to={Path.Login} state={state} color='black'>Login</StyledLink>
            </Styled.Container>
        </MainPopup>
    )
}
