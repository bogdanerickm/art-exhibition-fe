import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: theme.spacing(4),
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: '100%',
  },
}));

const tileData = [
    {
        img: 'https://i.picsum.photos/id/320/400/300.jpg?hmac=mmVaZ4JG1EuydVLwYNK0jSax0FIZ1QFEEgIvJwFbty8',
        title: 'A veces',
        author: 'Jonh Athan',
        cols: 2,
    },
    {
        img: 'https://i.picsum.photos/id/151/200/300.jpg?hmac=xUZfjy1YzUhANZsaGjxLKdz9qmhZYsYGpEoht7SCyng',
        title: 'Aman Ecio',
        author: 'Testinaco',
        cols: 1,
    },
    {
        img: 'https://i.picsum.photos/id/866/800/300.jpg?hmac=sWj6Xpp9M0IkuJ7oC8WxihWonXSQ8vXPLO4jG8X7FBw',
        title: 'The rial Jorge',
        author: 'author3',
        cols: 3,
    },
    {
        img: 'https://i.picsum.photos/id/901/200/200.jpg?hmac=BofL61KMrHssTtPwqR7iI272BvpjGsjt5PJ_ultE4Z8',
        title: 'Image',
        author: 'author4',
        cols: 1,
    },
    {
        img: 'https://i.picsum.photos/id/81/400/300.jpg?hmac=OYQl1Ve0ZaomQNYnTbdugCjZG-4w_deuoL6lBWXYu8g',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
];
 
export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon/>
                </IconButton>
                }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

