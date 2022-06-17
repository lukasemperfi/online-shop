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
            ${property}: calc(${minValueSize} + ${valueSizeDiff} * ((100vw - ${minValueSize}) / ${screenSizeDiff}));
        }
    `
}
