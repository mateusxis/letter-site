import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const HeaderBar = () => (
  <AppBar
    position="absolute"
    color="primary"
    elevation={0}
    sx={{
      position: "relative",
      borderBottom: (t) => `1px solid ${t.palette.divider}`,
    }}
  >
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Letter Site
      </Typography>
    </Toolbar>
  </AppBar>
);

export default HeaderBar;
