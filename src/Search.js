import React, { Component } from 'react';
import RouteButton from './RouteButton.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import './Search.css';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 70px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    //display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginTop:20,
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});


class Search extends React.Component {
  state = {
    gender: 'Male',
    from:'',
    to:''
  };
  
  handleChange = (event) => {
    const {name,value,id}=event.target
    this.setState({ [name]:value})
  };

  render() {
    const { classes } = this.props;
    return (

      <div>
        
        
        <Typography variant="h4" component="h3">
          Find Your Partner
        </Typography>
        <Divider variant="middle"  />
      <form className={classes.root} autoComplete="off">
        
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="gender-customized-native-simple" className={classes.bootstrapFormLabel}>
            Gender
          </InputLabel>
          <NativeSelect
            input={<BootstrapInput 
            name="gender" 
            onChange={this.handleChange}
            value={this.state.gender}
            id="gender-customized-native-simple" />}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            From
          </InputLabel>
          <BootstrapInput  
            name="from" 
            onChange={this.handleChange}
            value={this.state.from}/>
        </FormControl>
        
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            To
          </InputLabel>
          <BootstrapInput 
            name="to" 
            onChange={this.handleChange}
            value={this.state.to}/>
        </FormControl>
      </form>
           <RouteButton value="Search" pathname="/users" data={this.state}/>
            </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
