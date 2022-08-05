import styled from 'styled-components';

import arrowIcon from '../../assets/down-arrow.png';

interface WrapperProps {
    rotateArrow: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    display: inline-flex;

    &::after {
        content: '';
        width: 16px;
        height: 16px; 
        position: absolute;
        right: 10px;
        top: 51%;
        transform: translateY(-50%) ${({ rotateArrow }) => rotateArrow && 'rotate(180deg)'};
        pointer-events: none;
        background: url(${arrowIcon}) 50% /16px 16px no-repeat;
    }
`

export const Select = styled.select`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid #adacac;
    border-radius: 3px;
    padding: 5px 35px 5px 10px;
    appearance: none;
    background-color: #ffffff;

`
