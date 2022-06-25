import  { css } from 'styled-components'

import { Input } from '../Input/Input'
import { MainButton } from '../MainButton/MainButton'

const formItemStyle = css`
    margin-bottom: 20px;
`

export const SignupForm = () => {
    return (
        <form>
            <Input
                label='Full name'
                placeholder='Full name'
                containerStyle={formItemStyle}
                errorText='not valid'
            />
            <Input
                label='Email'
                placeholder='Email'
                containerStyle={formItemStyle}
            />
            <Input
                label='Password'
                placeholder='Password'
                containerStyle={formItemStyle}
            />
            <Input
                label='Confirm Password'
                placeholder='Confirm Password'
                containerStyle={formItemStyle}
            />
            <MainButton styles={formItemStyle} type='submit'>Sign Up</MainButton>
        </form>
    )
}
