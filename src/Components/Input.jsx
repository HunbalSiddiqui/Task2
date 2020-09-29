import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function LayoutTextFields(props) {
  const classes = useStyles();

  var [inputValue,setValue] = useState('')

  const handleChange = (val) =>{
        setValue(val)
  }

  const navigate = () =>{
      console.log(inputValue)
      props.history.push('/Output')
  }
  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 2 }}
          placeholder="No. of Required Bottles"
          helperText="Eg : 10"
          fullWidth
          margin="normal"
          value = {inputValue}
          onChange = {(e)=>{handleChange(e.target.value)}}
          InputLabelProps={{
            shrink: true,
          }}
        />
          <Button variant="contained"
          onClick={()=>{navigate()}}>Fetch</Button>
      </div>
    </div>
  );
}


export default withRouter(LayoutTextFields)