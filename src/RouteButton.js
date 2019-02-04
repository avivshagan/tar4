import React from "react";
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const RouteButton = (props) => {
    const { classes } = props;
    return (
        <Route render={({ history }) => (
            <Button variant="outlined" color="secondary" className={classes.button} onClick={() => {
                history.push({
                    pathname: props.pathname,
                    data: props.data
                });
            }}>
                {props.value}
            </Button>
        )}
        />
    )
}


RouteButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(RouteButton);
  