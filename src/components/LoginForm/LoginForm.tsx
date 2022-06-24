import styled, { css } from 'styled-components'
import { colors } from '../../styles/styles'
import { Input } from '../Input/Input'
import { Colors, MainButton } from '../MainButton/MainButton'

const Container = styled.div`
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    overflow: hidden;
    padding: 40px;
`
const formItemStyle = css`
    margin-bottom: 20px;
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
        color: ${colors.primary};
    }
`


export const LoginForm = () => {
    return (
        <Container>
            <Title>LOGIN</Title>
            <form>
                <Input
                    label='Email'
                    placeholder='Email'
                    containerStyle={formItemStyle}
                    errorText='not valid'
                />
                <Input
                    label='Password'
                    placeholder='Password'
                    containerStyle={formItemStyle}
                // errorText='not valid'
                />
                <MainButton styles={formItemStyle} type='submit'>LOGIN</MainButton>
            </form>
            <MainButton color={Colors.secondary} styles={formItemStyle}>SIGN IN WITH GOOGLE</MainButton>
            <Links>
                <a href="#">Register</a>
                <span>|</span>
                <a href="#">Reset Password</a>
            </Links>
        </Container>
    )
}
