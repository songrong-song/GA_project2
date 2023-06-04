import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <div>
    <AppBar position="relative" sx={{ backgroundColor: '#1e411e' }}>
      <Toolbar sx={{ height: 100 }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Singapore Property Transaction Record Dashboard
        </Typography>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Back To Home</Link>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;