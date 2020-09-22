import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    wrappa: {
        width: "60%",
        marginLeft: "20%",
        position: "fixed",
        // background: "rgba(245, 244, 242, 1)",
    },
    boxContainer: {   
        margin: "15px 25%",
        position: "relative",
        width: "50%",
        height: "35px",
        border: "2px solid grey",
        padding: "0px 8px",
        borderRadius: "50px",
        '@media (min-width: 769px) and (max-width: 1024px)': {
            width: "60%",
            margin: "15px 20%",
        },
    },
    elementsContainer: {
        width: "100%",
        height: "100%",
        verticalAlign: "middle",
    },
    search: {
        background: "transparent",
        marginRight: "100px",
        border: "none",
        height: "100%",
        width: "100%",
        padding: "3px 5px",
        borderRadius: "50px",
        fontSize: "18px",
        fontFamily: "Syne",
        color: "grey",
        fontWeight: "500",
        '&:focus': {
            outline: "none", 
        }
    },
    icon: {
        marginLeft: "30px",
    }
}));

export default function Search() {
    const classes = useStyles();

    return(
        <div className={classes.wrappa}>
            <div className={classes.boxContainer}>
                <table className={classes.elementsContainer}>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="search" className={classes.search}/ >
                            </td>
                            <td className={classes.icon}>
                                <SearchIcon style={{ fontSize: "25", color: "grey", pointer: "cursor", verticalAlign: "middle", }}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}