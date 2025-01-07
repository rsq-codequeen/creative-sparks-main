import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import '~/styles/index.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';

import { Notifications } from '@mantine/notifications';

const theme = createTheme({
  fontFamily: 'GreycliffCF',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <App />
        <Notifications />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
