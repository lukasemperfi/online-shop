import styled from 'styled-components';

import { Breakpoints } from '../../../styles/styles';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center; 

    @media (min-width: ${Breakpoints.lg}) {
       padding: 5vw;
    }

`
