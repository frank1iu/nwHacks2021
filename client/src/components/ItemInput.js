import React from "react";
import { InputBase, Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    justify: 'center',
    
  },
  post: {
    color: 'red'
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
                  <InputBase type="file" inputProps={{ accept: "image/*" }} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid>
                  <InputBase type="text" placeholder="Title" fullWidth />
                  <InputBase type="text" placeholder="Description" fullWidth />
                  <InputBase type="number" placeholder="Qty Offered/Needed" fullWidth />
                    <Grid item>
                      <Button variant='outlined' className={classes.post}>
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