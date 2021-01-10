import React, {useState, useEffect} from "react";
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

export default function ItemInput({listingType}) {
  const classes = useStyles();

  const [item, setItem] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(null)

  const createListing = () => {
    const submitter = localStorage.getItem("user")
    const data = {submitter, description, item, quantity: parseInt(quantity), unit: "Each", type: listingType}
    console.log(data)
    fetch(`http://localhost:3001/listing`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(res => res.json()).then(res => console.log(res))
  }

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
                  <InputBase type="text" value={item} placeholder="Item Title" onChange={e => setItem(e.target.value)} fullWidth />
                  <InputBase type="text" value={description} placeholder="Description" onChange={e => setDescription(e.target.value)} fullWidth />
                  <InputBase type="number" value={quantity} placeholder="Qty Offered/Needed" onChange={e => setQuantity(e.target.value)} fullWidth />
                    <Grid item>
                      <Button variant='outlined' className={classes.post} onClick={createListing}>
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