import { type PropsWithChildren } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';

import theme from '@config/theme';

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
