import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface UlProps {
    containerStyle?: FlattenSimpleInterpolation;
}

export const Ul = styled.ul<UlProps>`
    ${({ containerStyle }) => containerStyle}
`
