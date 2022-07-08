import { useState } from 'react'
import styled from 'styled-components'

import { Colors } from '../../styles/styles'
import { LoginForm } from '../LoginForm/LoginForm'
import { ButtonColors, MainButton } from '../MainButton/MainButton'
import { SignUpForm } from '../SignUpForm/SignupForm'


const Container = styled.div`
    background-color: ${Colors.white};
    width: 100%;
    height: 100%;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    overflow: hidden;
    padding: 40px;
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

export const FormToogle = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    const handleisLoginForm = () => {
        setIsLoginForm(!isLoginForm)
    }

    return (
        <Container>
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
    )
}
