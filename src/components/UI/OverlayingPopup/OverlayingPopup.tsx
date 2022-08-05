import { FC, ReactNode } from 'react';

import { OverlayWithLockedBody } from '../OverlayWithLockedBody/OverlayWithLockedBody';
import { Portal } from '../Portal/Portal';
import * as Styled from './OverlayingPopup.styled';

interface OverlayingPopupProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
}

export const OverlayingPopup: FC<OverlayingPopupProps> = ({
    children,
    onClose,
    isOpened
}) => {

    if (!isOpened) {
        return null
    }

    return (
        <Portal>
            <Styled.Container>
                <OverlayWithLockedBody
                    isOpened={isOpened}
                    onClick={onClose}
                    backgroundColor={'rgba(0, 0, 0, 0.6)'}
                />
                {children}
            </Styled.Container>
        </Portal>
    )
}
