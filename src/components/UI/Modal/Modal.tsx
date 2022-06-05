import { ComponentPropsWithoutRef, FC, MouseEvent } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './Modal.styled'
import { useLockedBody } from '../../../hooks/useLockedBody';

interface ModalProps extends ComponentPropsWithoutRef<'button'> {
    overlayStyles?: FlattenSimpleInterpolation;
    contentContainerStyles?: FlattenSimpleInterpolation;
    open: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
    children,
    open,
    onClose,
    overlayStyles,
    contentContainerStyles
}) => {

    useLockedBody(open)

    const handleClose = () => {
        if (onClose) {
            onClose()
        }
    }

    const handlePropagation = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }

    return (
        <Styled.Overlay
            open={open}
            onClick={handleClose}
            styles={overlayStyles}
        >
            <Styled.ContentContainer
                onClick={handlePropagation}
                styles={contentContainerStyles}
            >
                {children}
            </Styled.ContentContainer>
        </Styled.Overlay>
    )
}
