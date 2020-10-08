import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import NavBarButton from './NavBarButton';
import NavBarIcon from './NavBarIcon';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor:"white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll({children}) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Nav({props}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.navBar}>
          <Toolbar>
            <NavBarIcon></NavBarIcon>
            <NavBarButton name="Home"></NavBarButton>
            <NavBarButton name="Estudiantes"></NavBarButton>
            <NavBarButton name="Piezas"></NavBarButton>
            <NavBarButton name="Nosotros"></NavBarButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
