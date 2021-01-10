import React from "react";
import placeholder from "../images/placeholder.png";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  second: {
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  request: {
    width: 100,
    height: 30,
  },
  button: {
    display: 'block',
    top: '2px',
    borderRadius: 0,
    background: '#E9E9E9'
  },
  thirdsection: {
    position: 'relative',
    top: '10px',
    left: '50px'
  }
}));

export default function MyItems() {
  const classes = useStyles();
  const ColoredLine = () => (
    <hr
        style={{
            border: 0,
            background: 'orange',
            height: 1,
            borderStyle: 'inset'
        }}
    />
  );
  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={placeholder}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid className={classes.second} item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Request or Offer
              </Typography>
              <ColoredLine />
              <Typography variant="body2" gutterBottom>
                Item Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                Details
              </Typography>
            </Grid>
          </Grid >
          <Grid item className={classes.thirdsection}>
            <Grid class='row' item >
              <Button className={classes.button} size='small'>Edit Post</Button>
              &nbsp;
              <Button className={classes.button}size='small'>Delete Post</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
  );
}
