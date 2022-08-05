import styled from 'styled-components';

import { Breakpoints } from '../../../styles/styles';

export const Item = styled.li`
    background-color: transparent;
    outline: 0px;
    border-radius: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    color: inherit;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    white-space: nowrap;

    @media (min-width: ${Breakpoints.xs}) {
        padding: 0px 6px; 
    }

    @media (min-width: ${Breakpoints.md}) {
      padding: 6px 16px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    @media (min-width: 600px) {
          min-height: auto;  
    }
`
