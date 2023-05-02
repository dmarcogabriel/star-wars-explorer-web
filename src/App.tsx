import { Provider } from 'react-redux';
import CssBaseLine from '@mui/material/CssBaseline';

import { store } from '@config/store';

import ThemeProvider from '@providers/ThemeProvider';

import Navigation from './Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseLine />
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
