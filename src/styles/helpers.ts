import { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';

type CalcAdaptiveValueFunction = (
    property: string,
    minValueSize: string,
    maxValueSize: string,
    minScreenSize: string,
    maxScreenSize: string,
) => string

export const calcAdaptiveValue: CalcAdaptiveValueFunction = (
    property,
    minValueSize,
    maxValueSize,
    minScreenSize,
    maxScreenSize,
) => {
    const valueSizeDiff = parseInt(maxValueSize) - parseInt(minValueSize);
    const screenSizeDiff = parseInt(maxScreenSize) - parseInt(minScreenSize);

    return `
        ${property}: ${maxValueSize};
        @media (max-width: ${maxScreenSize}) {
            ${property}: calc(${minValueSize} + ${valueSizeDiff} * ((100vw - ${minScreenSize}) / ${screenSizeDiff}));
        }
    `
}

type CalcAdaptiveValueFunction2 = (
    property: string,
    minValueSize: number,
    maxValueSize: number,
    minScreenSize: number,
    maxScreenSize: number,
) => string

export const calcAdaptiveValue2: CalcAdaptiveValueFunction2 = (
    property,
    minValueSize,
    maxValueSize,
    minScreenSize,
    maxScreenSize,
) => {
    const valueSizeDiff = maxValueSize - minValueSize;
    const screenSizeDiff = maxScreenSize - minScreenSize;

    return `
        ${property}: ${maxValueSize}px;
        @media (max-width: ${maxScreenSize}px) {
            ${property}: calc(${minValueSize}px + ${valueSizeDiff} * ((100vw - ${minScreenSize}px) / ${screenSizeDiff}));
        }
    `
}


type CalcAdaptiveValueFunction3 = (
    minValueSize: string,
    maxValueSize: string,
    minScreenSize: string,
    maxScreenSize: string,
) => string

export const calcAdaptiveValue3: CalcAdaptiveValueFunction3 = (
    minValueSize,
    maxValueSize,
    minScreenSize,
    maxScreenSize,
) => {
    const valueSizeDiff = parseInt(maxValueSize) - parseInt(minValueSize);
    const screenSizeDiff = parseInt(maxScreenSize) - parseInt(minScreenSize);

    return `calc(${minValueSize} + ${valueSizeDiff} * ((100vw - ${minScreenSize}) / ${screenSizeDiff}))`
}