import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'
import { selectIsProductLoading } from '../../store/productsSlice/productsSlice'

import { Colors } from '../../styles/styles'
import { AddNewProductForm } from '../AddNewProductForm/AddNewProductForm'
import { LoginForm } from '../LoginForm/LoginForm'
import { ButtonColors, MainButton } from '../MainButton/MainButton'
import { MainPopup, MainPopupProps } from '../MainPopup/MainPopup'
import { SignUpForm } from '../SignUpForm/SignUpForm'


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

export const ModalAddNewProductForm = ({ isOpened, onClose }: MainPopupProps) => {
    const isLoading = useAppSelector(selectIsProductLoading)
    const [isSubmit, setIsSubmit] = useState(false)

    const onSubmit = () => {
        setIsSubmit(true)
    }

    useEffect(() => {
        if (!isLoading && isSubmit) {
            onClose()
        }
    }, [isLoading, isSubmit])


    return (
        <>
            {isLoading && isOpened ? <StyledOverlay /> : null}
            <MainPopup
                isOpened={isOpened}
                onClose={onClose}
            >
                <AddNewProductForm
                    onSubmit={onSubmit}
                />
            </MainPopup>
        </>
    )
}
