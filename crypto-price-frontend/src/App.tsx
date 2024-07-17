import React from 'react';
import theme from './theme';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@emotion/react';

const App: React.FC = () => <ThemeProvider theme={theme}><Dashboard /></ThemeProvider>;

export default App;
