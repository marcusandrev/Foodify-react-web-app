import { createGlobalStyle } from 'styled-components';
import Fredoka from '../fonts/Fredoka-VariableFont_wdth,wght.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: 'Fredoka';
    font-weight: medium;
    src: local('Fredoka'), url(${FredokaMedium}) format('truetype');
}
`;

export const palette = {
  orange: '#FFB966',
  yellow: '#FADC69',
  green: '#6AED7C',
  blue: '#2377FF',
  yellow: '#FFE102',
  pink: '#FF637A',
};

export const colors = {
  primary: palette.orange,
  secondary: palette.yellow,
  success: palette.green,
  information: palette.blue,
  warning: palette.yellow,
  danger: palette.pink,
};

export const fonts = {
    fredoka: 'Fredoka',
}

export const theme = {
    colors,
    typography: {
        heading: fonts.fredoka,
    }, 
    hero: {
        fontFamily: fonts.fredoka,
        h1: {
            fontSize: '4.5rem', //72px
            fontWeight: 100,
        }
    }
}