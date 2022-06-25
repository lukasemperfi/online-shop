import  { css } from 'styled-components'

import { Input } from '../Input/Input'
import { Colors, MainButton } from '../MainButton/MainButton'

const formItemStyle = css`
    margin-bottom: 20px;
`

export const LoginForm = () => {
    return (
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
            />
            <MainButton styles={formItemStyle} type='submit'>Log In</MainButton>
            <MainButton color={Colors.secondary} styles={formItemStyle}>SIGN IN WITH GOOGLE</MainButton>
        </form>
    )
}
