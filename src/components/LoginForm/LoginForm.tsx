import { ChangeEvent, useState } from 'react'
import { css } from 'styled-components'

import { Input } from '../Input/Input'
import { ButtonColors, MainButton } from '../MainButton/MainButton'

const formItemStyle = css`
    margin-bottom: 20px;
`
const inputStyle = css`
    /* padding: 12px 48px 12px 20px; */
`

export const LoginForm = () => {
    const [value, setValue] = useState('')

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form>
            <Input
                label='Email'
                placeholder='Email'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
                errorText='not valid'
                onChange={handleOnChange}
                value={value}
            />
            <Input
                label='Password'
                placeholder='Password'
                containerStyle={formItemStyle}
                inputStyle={inputStyle}
            />
            <MainButton styles={formItemStyle} type='submit'>Log In</MainButton>
            <MainButton color={ButtonColors.secondary} styles={formItemStyle}>SIGN IN WITH GOOGLE</MainButton>
        </form>
    )
}
