import React, {useState} from "react";
import { InputBase, Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

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

export default function ItemInput({listingType}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const [item, setItem] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(null)

  const createListing = (e) => {
    e.target.reset()
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
    <form onSubmit={createListing}>
        <Grid container  justify="center" className={classes.root}>
          <Paper className={classes.paper}  justify="center" >
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
                    <InputBase className={classes.title} onChange={e => setItem(e.target.value)} type="text" placeholder="  Title" />
                    <InputBase className={classes.description} onChange={e => setDescription(e.target.value)} type="text" placeholder="  Description"  />
                    <InputBase className={classes.quantity} onChange={e => setQuantity(e.target.value)} type="number" placeholder="  Qty Offered"  />
                    <Grid item>
                      <Button type='submit' className={classes.post} onClick={handleClick}>
                        Post
                      </Button>
                      <Snackbar className={classes.snackbar} open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose}>
                          Posting submitted!
                        </Alert>
                      </Snackbar>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
  );
}