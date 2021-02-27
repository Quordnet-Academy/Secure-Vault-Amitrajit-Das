import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles/navbarStyling.js'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';




export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#e47ff8', boxShadow: 'none'}}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" className={classes.title} style={{fontFamily: 'Satisfy', fontWeight: 'bold'}}> 
            SV
          </Typography >
          <Button className={classes.buttons}>Signup</Button>
          <Button className={classes.buttons}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

