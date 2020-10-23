import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sliderImg: {
    width: "100%",
    objectFit: "cover"
  },
  sectionContainer:{
    display:"flex",
    flexWrap:"wrap"
  },
  imageContainer:{
    padding: "8px 16px"
  },
  title:{
    textAlign:"center",
    fontSize: "18px",
    fontWeight: "bolder",
    margin: "8px 0"
  }
}));

const posts = [
  {
    img: "https://picsum.photos/1200/900",
    title: "asd"
  },
  {
    img: "https://picsum.photos/1200/900",
    title: "asd"
  },
  {
    img: "https://picsum.photos/1200/900",
    title: "asd"
  },
  {
    img: "https://picsum.photos/1200/900",
    title: "asd"
  },
]

//agregar card

function ImageGrid({post}){
  const classes = useStyles();
  return (
    <Grid xs="6" className={classes.imageContainer}>
      <div className={classes.title} >{post.title}</div>
      <img
        src={post.img}
        className={classes.sliderImg}
      />
    </Grid>
  )
}

export default function ImageSection() {
  const classes = useStyles();

  return (
    <div className={classes.sectionContainer}> 
      { posts.map( (post) => { return (<ImageGrid post={post}/>) } ) }
    </div>
  );
}
