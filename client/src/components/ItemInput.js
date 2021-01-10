import React from "react";
import { InputBase, Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    justify: 'center',
    padding: '30px'
  },
  chooseFile:{
    marginLeft: '30px',
    height: '10px',
  },
  post: {
    background: '#ffc06e',
    alignSelf: 'right',
    marginTop: '7px',
    borderRadius: 0,
    marginBottom: '8px'
  },
  description: {
    height: '100px',
    width: '400px',
    alignSelf: 'top',
    background: '#fafafa',
    marginRight: '10px',
    marginTop: '5px',
    textAlign: 'top'
  },
  quantity: {
    height: '40px',
    width: '400px',
    alignSelf: 'top',
    background: '#fafafa',
    marginRight: '10px',
    marginTop: '5px'
  },
  title: {
    height: '40px',
    width: '400px',
    background: '#fafafa',
    marginTop: '10px'
  },
  fileLabel: {
    marginLeft: '22px',
    marginTop: '10px',
    fontSize: 13,
    background: '#fafafa',
    width: '100px',
    height: '70px',
    textAlign: 'center',
    padding: '50px',
    color: 'grey'
  }
}))

export default function ItemInput() {
  const classes = useStyles();
  return (
      <Grid container  alignItems="center" justify="center" className={classes.root}>
        <Paper className={classes.paper} alignItems="center" justify="center" >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid className={classes.second} item xs container direction="column" spacing={2}>
                <Grid item xs> 
                  <Grid> 
                    <p className={classes.fileLabel}>Attach an image</p>
                    <InputBase className={classes.chooseFile} type="file" inputProps={{ accept: "image/*" }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='column'>
                  <InputBase className={classes.title} type="text" placeholder="  Title" />
                  <InputBase className={classes.description} type="text" placeholder="  Description"  />
                  <InputBase className={classes.quantity} type="number" placeholder="  Qty Offered"  />
                  <Grid item>
                    <Button type='outline' className={classes.post}>
                      Post
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
  );
}