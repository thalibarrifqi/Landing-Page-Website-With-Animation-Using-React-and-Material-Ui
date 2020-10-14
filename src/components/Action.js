import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content:{
    justifyContent:'center',
    display: 'flex'
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
        <Container>
            <Box className={classes.content}>
                <Button variant="contained" color="secondary">
                    Get Started
                </Button>
            </Box>
        </Container>
    </div>
  );
}
