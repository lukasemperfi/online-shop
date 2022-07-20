import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import arrowIcon from '../../assets/down-arrow.png'

interface StyledWrapperProps {
    rotateArrow: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
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


const StyledSelect = styled.select`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid #adacac;
    border-radius: 3px;
    padding: 5px 35px 5px 10px;
    appearance: none;
    background-color: #ffffff;

`

interface SelectProps {
    options: SelectOption[],
    value: string,
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

interface SelectOption {
    value: string,
    name: string,
}

export const Select: FC<SelectProps> = ({ options, value, onChange }) => {
    const [arrowRotate, setArrowRotate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const handleOnBlur = () => setIsOpen(false)

    useEffect(() => {
        setArrowRotate(isOpen)
    }, [isOpen])

    return (
        <StyledWrapper rotateArrow={arrowRotate}>
            <StyledSelect
                onClick={handleOnClick}
                onBlur={handleOnBlur}
                value={value}
                onChange={onChange}
            >
                {options.map(option =>
                    <option value={option.value} key={option.value}>
                        {option.name}
                    </option>
                )}

            </StyledSelect>
        </StyledWrapper>
    )
}
