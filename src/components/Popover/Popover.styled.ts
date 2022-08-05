import styled from 'styled-components';

import { PopoverPositionProps } from '../../hooks/usePopoverPosition/usePopoverPosition';

interface PopoverContent {
    elementPosition: PopoverPositionProps
}

export const PopoverContent = styled.div<PopoverContent>`
    position: fixed;
    top: ${({ elementPosition }) => elementPosition.vertical + 'px'};
    left: ${({ elementPosition }) => elementPosition.horizontal + 'px'};
    z-index: 2;
`
