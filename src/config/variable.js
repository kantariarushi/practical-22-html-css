/* eslint-disable */
export const breakpoints = {
    xxs: '(min-width: 470px)',
    xs: '(min-width: 480px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

export const breakpointsDown = {
    xs: '(max-width: 479px)',
    sm: '(max-width: 575px)',
    md: '(max-width: 767px)',
    lg: '(max-width: 991px)',
    xl: '(max-width: 1199px)',
    xxl: '(max-width: 1599px)'
};

export const spacingValues = [
    0, 2, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 26, 32, 40, 60
];

export const fontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 34];

export const fontWeights = [300, 400, 500, 600, 700, 800, 900];

export const radiusValues = [2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 60];

export const displayValues = [
    'none',
    'block',
    'inline',
    'inline-block',
    'flex',
    'grid'
];

export const alignItemsValues = [
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'baseline'
];

export const justifyContentValues = [
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly'
];

export const rem = (pxValue) => {
    const ratio = 16; // Set according to the project configuration ratio
    let pxValues;
    if (Array.isArray(pxValue)) {
        // eslint-disable-next-line prefer-destructuring, no-param-reassign
        pxValue = pxValue[0];
    }
    // eslint-disable-next-line prefer-const
    pxValues = parseInt(pxValue, 10);
    return `${pxValues / ratio}rem`;
};

const hexToRgb = (hex) => {
    // http://stackoverflow.com/a/5624139
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    // eslint-disable-next-line no-param-reassign
    hex = hex.replace(
        shorthandRegex,
        // eslint-disable-next-line func-names
        function (m, r, g, b) {
            return r + r + g + g + b + b;
        }
    );
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
};

export const rgba = (hex, alpha) => {
    const rgbColor = hexToRgb(hex);
    return `rgba(${rgbColor?.r}, ${rgbColor?.g}, ${rgbColor?.b}, ${alpha})`;
};
