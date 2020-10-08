import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    flexElement: {
        display: "flex",
        marginLeft: "16px",
        paddingRight: "64px"
    },
    image: {
        width:"250px"
    }
}));

export default function NavBarIcon({name}) {
    const classes = useStyles()
    return (
        <div className={classes.flexElement}>
            <img className={classes.image} src="/logo-luna-bella.png"></img>
        </div>
    );
  }