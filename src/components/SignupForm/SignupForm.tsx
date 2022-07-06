import { css } from 'styled-components'

import { Input } from '../Input/Input'
import { MainButton } from '../MainButton/MainButton'

const formItemStyle = css`
    margin-bottom: 20px;
`
const inputStyle = css`
    /* padding: 12px 48px 12px 20px; */
`

export const SignupForm = () => {
    return (
        <form>
            <Input
                label='Full name'
                placeholder='Full name'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText='not valid'
            />
            <Input
                label='Email'
                placeholder='Email'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
            />
            <Input
                label='Password'
                placeholder='Password'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
            />
            <Input
                label='Confirm Password'
                placeholder='Confirm Password'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
            />
            <MainButton styles={formItemStyle} type='submit'>Sign Up</MainButton>
        </form>
    )
}
