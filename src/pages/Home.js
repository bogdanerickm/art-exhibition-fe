import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '../components/Slider';
import Nav from '../components/NavBar';
import ImageSection from '../components/ImageSection';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"64px",
  },
  pageContainer:{
    margin: "0 15%"
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav/>
      <Slider/>
      <div className={classes.pageContainer}>
        <ImageSection />
      </div>
    </div>
  );
}
