import { FC, ReactNode, useState } from 'react';

import { PopoverPlacement } from '../../hooks/usePopoverPosition/models/PopoverPlacement';
import { usePopoverPosition } from '../../hooks/usePopoverPosition/usePopoverPosition';
import { OverlayWithLockedBody } from '../OverlayWithLockedBody/OverlayWithLockedBody';
import { Portal } from '../Portal/Portal';
import * as Styled from './Popover.styled';

export interface PopoverProps {
    children?: ReactNode;
    anchorEl: HTMLElement | null;
    onClose: () => void;
    isOpened: boolean;
    placement: PopoverPlacement;
}

export const Popover: FC<PopoverProps> = ({
    children,
    anchorEl,
    onClose,
    isOpened,
    placement
}) => {
    const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null)
    const popoverPosition = usePopoverPosition(anchorEl, popoverRef, placement)

    if (!isOpened) {
        return null
    }

    return (
        <Portal>
            <OverlayWithLockedBody isOpened={isOpened} onClick={onClose} />
            <Styled.PopoverContent
                ref={setPopoverRef}
                elementPosition={popoverPosition}
            >
                {children}
            </Styled.PopoverContent>
        </Portal>
    )
}
