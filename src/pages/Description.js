import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    description: {
        width: "40%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        '@media (max-width: 768px)': {
            height: "50%",
            width: "100%",
        },
    },
    quote: {
        padding: "40px",
        height: "40%",
    },
    quoteContent: {
        width: "100%",
        fontSize: "22px",
        fontFamily: "syne",
        color: "grey"
    },
    credentials: {
        height: "40%",
        display: "flex",
        justifyContent: "center",
    },
    buttonsignup: {
        marginRight: "5px",
        height: "40px",
        background: "#6159E5",
        border: "none",
        color: "white",
        padding: "12px 32px",
        textAlign: "center",
        display: "inline-block",
        fontSize: "16px",
        fontFamily: "syne",
        outline: "none",
        borderRadius: "15px",
        cursor: "pointer",
    },
    buttonlogin: {
        marginLeft: "5px",
        height: "40px",
        backgroundColor: "white",
        color: "#6159E5",
        border: "2px solid #6159E5",
        padding: "12px 32px",
        fontFamily: "syne",
        outline: "none",
        borderRadius: "15px",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        
    }
}));

export default function Description() {
    const classes = useStyles();

    return (
        <div className={classes.description}>
            <div className={classes.quote}>
                <p className={classes.quoteContent}>"the best thing to do with the<br/>best things in life is to<br/>give them away."</p>
                <p className={classes.quoteContent}>- Dorothy Day</p>
            </div> 
            <div className={classes.credentials}>
                <Link to="/auth/signup" className={classes.link}>
                    <button className={classes.buttonsignup}>                   
                        Sign up
                    </button>
                </Link>
                <Link to="/auth/login" className={classes.link}>
                    <button className={classes.buttonlogin}>
                        Login
                    </button>
                </Link>
            </div>
            
        </div>
    )
}