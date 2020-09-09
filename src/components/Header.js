import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        height: "65px",
        backgroundColor: '#7e57c2',
        textAlign: "center",


    }
}));

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.header}>
            <Typography variant="h3">
               Disappearing Tweet
             </Typography>

        </div>
    )

}
export default Header;