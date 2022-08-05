import { FC, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { OverlayingPopup } from '../UI/OverlayingPopup/OverlayingPopup';
import * as Styled from './MainPopup.styled';

export interface MainPopupProps {
    children?: ReactNode;
    onClose: () => void;
    isOpened: boolean;
    containerStyles?: FlattenSimpleInterpolation;
}

export const MainPopup: FC<MainPopupProps> = ({ children, onClose, isOpened, containerStyles }) =>
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
        <Styled.Container containerStyles={containerStyles}>
            <Styled.CloseIconAbsolutePos width={30} height={30} onClick={onClose} />
            {children}
        </Styled.Container>
    </OverlayingPopup>
