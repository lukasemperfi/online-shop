import { Link } from "react-router-dom";
import styled from "styled-components";
import { spacing } from "../../styles/styles";
import { Colors } from '../../styles/styles';


export const StyledMenuLink = styled(Link)`
    display: inline-flex;
    padding: ${spacing.tiny} 0;
    color: ${Colors.primary};
    position: relative;
    /* width: 100%; */
    font-weight: 500;

    &:active {
        color: inherit;
    }

    &:after {
        position: absolute;
        content: "";
        width: 0px;
        height: 1.5px;
        bottom: 0px;
        left: 50%;
        right: 0;
        background: #000;
        transition: all 0.4s;
        transform: translateX(-50%);
        overflow: hidden;
    }

    &.active::after {
        width: 100%;
    }
`