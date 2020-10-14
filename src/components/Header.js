import React, { useState, useEffect } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
        fontFamily: 'Quicksand'
    },
    icon:{
        color: '#fff',
        fontSize: '2rem'
    },
    appbarTitle:{
        flexGrow: '1',
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto'
    },
    colorTitle:{
        color: '#FF1493'
    },
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    colorText1:{
        color: '#FFF',
        fontSize: '3rem',
        textAlign: 'center',
        fontFamily: 'Quicksand'
    },
    colorText2:{
        color: '#FF1493',
        fontSize: '3rem',
        textAlign: 'center',
        fontFamily: 'Quicksand'
    },
    expandIcon:{
        color: '#FF1493',
        fontSize: '4rem',
    }
}));

export default function Header(){
    const classes = useStyles()
    const [checked, setChecked]=useState(false)
    useEffect(() => {
        setChecked(true);
    }, [])
    return(
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        Your<span className={classes.colorTitle}>Music.</span>
                    </h1>
                        <IconButton>
                            <SortIcon className={classes.icon} />
                        </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})} collapsedHeight={40}>
            <div>
                <h1 className={classes.colorText1}>
                    My Music <br /> Your Music<br /><span className={classes.colorText2}>Is Our Music<span className={classes.colorText1}>.</span></span>
                    <br />
                    <Scroll to="artist-to-scroll" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.expandIcon}/>
                        </IconButton>
                    </Scroll>
                </h1>
            </div>
            </Collapse>
        </div>
    )
}