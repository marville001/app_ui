import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        width: "60%",
        '@media (max-width: 768px)': {
            height: "50%",
            width: "100%",
        }
    },
    selfImage: {
        width: "90%",
        height: "80%",
        margin: "8% 5%",
        '@media (max-width: 768px)': {
            
            height:"30%"
        }
    },
}));

export default function Image() {
    const classes = useStyles();

    return(
        <div className={classes.image}>
            <img src="/giving.svg" alt="here" className={classes.selfImage}/>
        </div>
    );
}