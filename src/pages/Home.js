import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '../components/Slider';
import Nav from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Nav></Nav>
        <Slider></Slider>
    </div>
  );
}
