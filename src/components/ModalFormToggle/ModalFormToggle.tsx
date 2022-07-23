import { useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'
import { selectIsLoading } from '../../store/userSlice'

import { Colors } from '../../styles/styles'
import { LoginForm } from '../LoginForm/LoginForm'
import { ButtonColors, MainButton } from '../MainButton/MainButton'
import { MainPopup, MainPopupProps } from '../MainPopup/MainPopup'
import { SignUpForm } from '../SignUpForm/SignUpForm'
import {ReactComponent as CloseIcon} from '../../assets/close.svg'


const Container = styled.div`
    padding: 40px;
    position: relative ;
`
const StyledPlusIcon = styled(CloseIcon)`
    position: absolute;
    top: 15px;
    right: 15px;
`

const Title = styled.h2`
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`

const Links = styled.div`
    display: flex;
    column-gap: 5px;
    &  a {
        font-weight: 500;
        color: ${Colors.primary};
    }
`
const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000000;
    background-color: red;
    opacity: 0.5;
`

export const ModalFormToggle = ({ isOpened, onClose }: MainPopupProps) => {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const isLoading = useAppSelector(selectIsLoading)

    const handleisLoginForm = () => {
        setIsLoginForm(!isLoginForm)
    }

    return (
        <>
            {isLoading && isOpened ? <StyledOverlay /> : null}
            <MainPopup
                isOpened={isOpened}
                onClose={onClose}
            >
                <Container>
                    <StyledPlusIcon width={30} height={30} onClick={onClose}/>
                    <Title>
                        {isLoginForm ? 'LOGIN' : 'REGISTRATION'}
                    </Title>
                    {isLoginForm ? <LoginForm /> : <SignUpForm />}
                    <Links>
                        <a href="#">Reset Password</a>
                        <span>|</span>
                        <MainButton
                            color={ButtonColors.text}
                            onClick={handleisLoginForm}
                        >
                            {isLoginForm ? 'signUp' : 'Login'}
                        </MainButton>
                    </Links>
                </Container>
            </MainPopup>
        </>
    )
}
