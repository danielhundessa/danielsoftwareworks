import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";




function Appbar() {

  return (
    <div >
      <AppBar position='static'>
        <Toolbar>
          <IconButton></IconButton>
          <Typography variant="h6">Job Applications</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Appbar;
