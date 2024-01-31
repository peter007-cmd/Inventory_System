import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';

const UserDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:5000/user/userDetails', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error.response.data);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" gutterBottom>Username</Typography>
              <Typography variant="body1">{userData?.username || '-'}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" gutterBottom>Email</Typography>
              <Typography variant="body1">{userData?.email || '-'}</Typography>
            </Paper>
          </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Total Inventory Sold</Typography>
           
          <Typography variant="body1">-</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Total Remaining</Typography>
            <Typography variant="body1">-</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Gross Profit</Typography>
          <Typography variant="body1">-</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetails;