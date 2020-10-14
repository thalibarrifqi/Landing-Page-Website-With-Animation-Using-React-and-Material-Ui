import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ImageCard from './ImageCard';
import artist from '../static/artist'
import useWindowPosition from '../hook/useWindowPosition'
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root:{
       minHeight: '86vh',
       display: 'flex',
       justifyContent:'center',
       alignItems:'center',
       [theme.breakpoints.down('sm')]:{
           flexDirection:'column',
       }
    }
}));

export default function (){
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="artist-to-scroll">
             <React.Fragment>
                <CssBaseline />
                <ImageCard artist={artist[0]} checked={checked}/>
                <ImageCard artist={artist[1]} checked={checked}/>
            </React.Fragment>
        </div>
    )
}