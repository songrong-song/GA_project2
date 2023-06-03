import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@material-ui/core';

const Navbar = () => {
  return (
  <div>
    <AppBar position="relative">
      <Toolbar sx={{ height: 100 }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Singapore Property Transaction Record
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;