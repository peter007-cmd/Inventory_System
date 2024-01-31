import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, styled, IconButton, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import '../pages/NavStyles.css';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  marginRight: '16px',
});

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <StyledLink to="/">Inventory Management System</StyledLink>
        </Typography>
        {!isLoggedIn ? (
          <div>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </div>
        ) : (
          <div>
            <StyledLink to='/addprod'>Add New Products</StyledLink>
            <StyledLink to='/addsup'>Add Suppliers Information</StyledLink>
            <StyledLink to='/data'>View Supplier Details</StyledLink>
            <StyledLink to='/trdata'>Transaction Details</StyledLink>
            <StyledLink to='/log'>Log your Sale/Purchase</StyledLink>
            <StyledLink to='/userdetails'>
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </StyledLink>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
