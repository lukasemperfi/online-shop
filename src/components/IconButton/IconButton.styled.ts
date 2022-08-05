import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface IconButtonProps {
    width?: number | string;
    height?: number | string;
    styles?: FlattenSimpleInterpolation;
}

export const IconButton = styled.button<IconButtonProps>`
    position: relative;
    background-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width ? width + 'px' : 'auto'};
    height: ${({ height }) => height ? height + 'px' : 'auto'};
    color: var(--primary);
    &:disabled {
      opacity: 0.2;
      cursor: auto;
    };
    
    & img {
      max-width: 100%;
    };
      ${({ styles }) => styles};
`;
