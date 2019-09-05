const colors = {
  darkBlue: '#127fab',
  lightBlue: '#81bfd5',
  darkGreen: '#458314',
  whiteGreen: '#a0c182',
  darkGrey: '#37454d', // dark text
  lightGrey: '#9ba8a6', // light text
  someGrey: '#f2f2f2', // maybe picked the wrong color from pic?
  paleGrey: '#ebeced',
  darkOrange: '#c74b36',
  lightOrange: '#f28e24'
};

const spacing = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const getSpacing = (value: number) => `${spacing[value]}px`;

const constrain = 1170;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

// component configs
const button = {
  primary: colors.darkBlue,
  secondary: colors.darkGreen
};

const theme = {
  colors,
  constrain,
  device,
  spacing: getSpacing,
  button
};

export default theme;
