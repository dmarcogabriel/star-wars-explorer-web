import { createTheme } from '@mui/material';

import { Colors } from '@config/colors';

const theme = createTheme({
  palette: {
    primary: {
      contrastText: Colors.neutral.black,
      main: Colors.branding['brand-primary-main'],
      light: Colors.branding['brand-primary-light'],
      dark: Colors.branding['brand-primary-dark'],
    },
    error: {
      main: Colors.feedback.danger,
    },
    success: {
      main: Colors.feedback.success,
    },
    grey: {
      100: Colors.neutral.white,
      200: Colors.neutral['gray-100'],
      300: Colors.neutral['gray-200'],
      400: Colors.neutral.black,
    },
    background: {
      default: Colors.neutral.black,
      paper: Colors.neutral.black,
    },
    text: {
      primary: Colors.neutral.white,
      secondary: Colors.neutral['gray-100'],
    },
    common: {
      black: Colors.neutral.black,
    },
  },
});

export default theme;
