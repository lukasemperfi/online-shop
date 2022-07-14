import React, { FC, ReactNode, RefObject, useEffect, useLayoutEffect, useState } from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import { PopoverPlacement } from '../../hooks/usePopoverPosition/models/PopoverPlacement';
import { PopoverPositionProps, usePopoverPosition } from '../../hooks/usePopoverPosition/usePopoverPosition';
import { useElementSize } from '../../hooks/useElementSize';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { OverlayWithLockedBody } from '../OverlayWithLockedBody/OverlayWithLockedBody';
import { Portal } from '../Portal/Portal';

export interface PopoverProps {
    children?: ReactNode;
    anchorEl: HTMLElement | null;
    onClose: () => void;
    isOpened: boolean;
    placement: PopoverPlacement;
}

interface PopoverContent {
    elementPosition: PopoverPositionProps
}

const StyledPopoverContent = styled.div<PopoverContent>`
    position: fixed;
    top: ${({ elementPosition }) => elementPosition.vertical + 'px'};
    left: ${({ elementPosition }) => elementPosition.horizontal + 'px'};
    z-index: 2;
`

export const Popover: FC<PopoverProps> = ({ children, anchorEl, onClose, isOpened, placement }) => {
    console.log('render popover');
    const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null)

    const popoverPosition = usePopoverPosition(anchorEl, popoverRef, placement)


    
    if (!isOpened) {
        return null
    }

    return (
        <Portal>
            <OverlayWithLockedBody isOpened={isOpened} onClick={onClose} />
            <StyledPopoverContent
                ref={setPopoverRef}
                elementPosition={popoverPosition}
            >
                {children}
            </StyledPopoverContent>
        </Portal>
    )
}
