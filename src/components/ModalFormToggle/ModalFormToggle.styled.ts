import styled from 'styled-components';

import { Colors } from '../../styles/styles';
import { MainButton } from '../MainButton/MainButton';

export const Container = styled.div`
    padding: 40px;
    position: relative ;
`

export const Title = styled.h2`
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`

export const Links = styled.div`
    display: flex;
    column-gap: 5px;
    &  a {
        font-weight: 500;
        color: ${Colors.primary};
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000000;
    background-color: transparent;
    opacity: 0.5;
`

export const RegButton = styled(MainButton)`
    margin-top: 20px;
    padding: 5px;
`
