import { ChangeEvent, FC, useEffect, useState } from 'react';

import * as Styled from './Select.styled';

interface SelectOption {
    value: string,
    name: string,
}

interface SelectProps {
    options: SelectOption[],
    value: string,
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select: FC<SelectProps> = ({
    options,
    value,
    onChange
}) => {
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
        <Styled.Wrapper rotateArrow={arrowRotate}>
            <Styled.Select
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

            </Styled.Select>
        </Styled.Wrapper>
    )
}
