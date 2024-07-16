import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { APP_TITLE } from '../config/messages';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{APP_TITLE}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
