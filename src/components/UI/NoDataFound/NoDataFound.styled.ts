import styled from 'styled-components';

import { screenWidth } from '../../../styles/styles';
import { calcAdaptiveValue } from "../../../styles/helpers";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 50px;
`

export const Title = styled.h1`
    font-weight: 600;
    ${calcAdaptiveValue('font-size', '12px', '25px', screenWidth.min, screenWidth.max)}
`
