import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface IconButtonProps {
    width?: number | string;
    height?: number | string;
    styles?: FlattenSimpleInterpolation;
}

export const IconButton = styled.button<IconButtonProps>`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width ? width + 'px' : '50px'};
    height: ${({ height }) => height ? height + 'px' : '50px'};
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

