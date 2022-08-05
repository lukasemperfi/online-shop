import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks/redux';
import { selectIsProductLoading } from '../../store/productsSlice/productsSlice';
import { AddNewProductForm } from '../AddNewProductForm/AddNewProductForm';
import { MainPopup, MainPopupProps } from '../MainPopup/MainPopup';


export const ModalAddNewProductForm = ({
    isOpened,
    onClose
}: MainPopupProps) => {
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
        <MainPopup
            isOpened={isOpened}
            onClose={onClose}
        >
            <AddNewProductForm
                onSubmit={onSubmit}
            />
        </MainPopup>
    )
}
