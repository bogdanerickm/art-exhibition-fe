import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import ReactImageAppear from 'react-image-appear';

 
const useStyles = makeStyles((theme) => ({
    floatingText: {
      position:"absolute",
      bottom: "60px",
      left: 0,
      right: 0,
      textAlign:"center"
    },
    sliderImg: {
        width: "100%",
        objectFit: "cover"
    }
}));

export default function Slider(props)
{
    var items = [
        {
            name: "Muestra de ceramica - Luna Bella de Barro",
            description: "Probably the most random thing you have ever seen!"
        },
        
    ]

 
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    const classes = useStyles();
    return (
        <>
            <ReactImageAppear 
                src="https://i.picsum.photos/id/815/1600/300.jpg?hmac=EXoAuIE6IuwVWNe01OfLdo-LO_4k7z507eRuYXl1QWU"
                animation="none"
                animationDuration="0"
                className={classes.sliderImg}
            />
            <div className={classes.floatingText}>    
                <h2>{props.item.name}</h2>
            </div>
        </>
    )
}