import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Collapse} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    background: 'rgba(0, 0, 0, 0.5)',
    margin:'20px'
  },
  media: {
    height: 400,
  },
  title:{
      fontFamily: 'Quicksand',
      fontWeight:'bold',
      fontSize:'1.5rem',
      color: '#fff'
  },
  desc:{
    fontFamily: 'Quicksand',
    fontSize:'1rem',
    color: '#ddd'
  }
});

export default function ImageCard({artist, checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})} collapsedHeight={40}>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={artist.imageUrl}
          title={artist.cpation}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
           {artist.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {artist.desc}
          </Typography>
        </CardContent>
    </Card>
    </Collapse>
  );
}
