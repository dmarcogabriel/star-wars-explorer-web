import { Provider } from 'react-redux';

import { store } from '@config/store';

import ThemeProvider from '@providers/ThemeProvider';

import Navigation from './Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
