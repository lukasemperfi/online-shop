import { FC } from 'react';

import { useLockedBody } from '../../../hooks/useLockedBody';
import * as Styled from './OverlayWithLockedBody.styled';

interface OverlayWithLockedBodyProps {
    isOpened: boolean;
    onClick?: () => void;
    backgroundColor?: string;
}

export const OverlayWithLockedBody: FC<OverlayWithLockedBodyProps> = ({
    isOpened,
    onClick,
    backgroundColor
}) => {

    useLockedBody(isOpened)

    return (
        <Styled.Overlay
            onClick={onClick}
            backgroundColor={backgroundColor}
        />
    )
}
