import { css } from "styled-components";

export const maxTextLines = (numberOfLines: number) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    display: -webkit-box;
    line-clamp: ${numberOfLines};
    -webkit-line-clamp: ${numberOfLines};
    box-orient: vertical;     
    -moz-box-orient: vertical;
    -webkit-box-orient: vertical; 
`