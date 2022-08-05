import { ComponentPropsWithoutRef, FC } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { Loader } from '../Loaders/Loader/Loader';
import { ButtonColors } from './MainButton.styled';
import * as Styled from './MainButton.styled';

interface MainButtonProps extends ComponentPropsWithoutRef<'button'> {
    color?: ButtonColors,
    styles?: FlattenSimpleInterpolation;
    width?: string;
    isLoading?: boolean;
}

export const MainButton: FC<MainButtonProps> = (
    {
        children,
        color = ButtonColors.primary,
        styles,
        onClick,
        width,
        isLoading = false,
        ...buttonProperties
    }) =>
    <Styled.Button
        color={color}
        styles={styles}
        onClick={onClick}
        width={width}
        {...buttonProperties}
    >
        {children}
        {isLoading && <Loader size='2px' margin='0 0 0 10px' />}
    </Styled.Button>
