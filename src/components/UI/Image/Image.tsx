import React, { ComponentPropsWithoutRef, FC } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ImageContainer } from './Image.styled';

interface ImageProps extends ComponentPropsWithoutRef<'img'> {
    styles?: FlattenSimpleInterpolation;
}


export const Image: FC<ImageProps> = ({ styles, ...rest }) =>
    <ImageContainer styles={styles}>
        <img {...rest} />
    </ImageContainer>
