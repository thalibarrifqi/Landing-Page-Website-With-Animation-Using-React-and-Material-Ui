import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Action from './components/Action';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
    },
}));

export default function App(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Content />
            <Action />
            <Footer />
        </div>
    ) 
}