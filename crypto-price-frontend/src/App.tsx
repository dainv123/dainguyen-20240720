import React from 'react';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

const App: React.FC = () => <ThemeProvider theme={theme}><Dashboard /></ThemeProvider>;

export default App;
