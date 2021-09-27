import { adaptV4Theme, createTheme } from '@mui/material';

export default createTheme(
  adaptV4Theme({
    direction: 'ltr',
    typography: {
      htmlFontSize: 10,
      fontFamily: 'Heebo',
    },
    palette: {
      primary: {
        main: '#265FB1',
        light: '#D5E6FF',
      },
      secondary: {
        main: '#FFB462',
      },
      error: {
        main: '#F97575',
      },
    },
    overrides: {
      MuiButton: {
        contained: {
          height: '5.5rem',
          width: '12.5rem',
          fontSize: '1.6rem',
        },
      },
      MuiFormHelperText: {
        root: {
          color: '#F97575',
        },
      },
    },
  }),
);
