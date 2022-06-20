import { ComponentPropsWithoutRef, FC, MouseEvent } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './Popup.styled'
import { useLockedBody } from '../../../hooks/useLockedBody';
import { Portal } from '../Portal/Portal';

interface PopupProps extends ComponentPropsWithoutRef<'button'> {
    overlayStyles?: FlattenSimpleInterpolation;
    contentContainerStyles?: FlattenSimpleInterpolation;
    open: boolean;
    onClose: () => void;
}

export const Popup: FC<PopupProps> = ({
    children,
    open,
    onClose,
    overlayStyles,
    contentContainerStyles
}) => {

    useLockedBody(open)

    if (!open) {
        return null
    }

    const handleClose = () => {
        if (onClose) {
            onClose()
        }
    }

    const handlePropagation = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }

    return (
        <Portal>
            <Styled.Popup>
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
            </Styled.Popup>
        </Portal>

    )
}
