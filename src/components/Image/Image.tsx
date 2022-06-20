import React, { ComponentPropsWithoutRef, FC } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ImageContainer } from './Image.styled';

interface ImageProps extends ComponentPropsWithoutRef<'img'> {
    containerStyle?: FlattenSimpleInterpolation;
    imageStyle?: FlattenSimpleInterpolation;
}


export const Image: FC<ImageProps> = ({ containerStyle, imageStyle, ...rest }) =>
    <ImageContainer containerStyle={containerStyle} imageStyle={imageStyle}>
        <img {...rest} />
    </ImageContainer>
