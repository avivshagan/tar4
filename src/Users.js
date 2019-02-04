import React from 'react';
import RouteButton from './RouteButton.js';
import Hobby from './Hobby.js';
import './Movie.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import './Users.css';
const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: '0 auto',
    
  },
  media: {
    height: 320,
  },
  actions: {
    display: 'flex',
  },

});

var filterd=[];
class Users extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            index: 0,
            error:null,
            data:null,
         
        }
    }
    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    componentDidMount() {
        if(window.location.hostname==="localhost"){
            let url = 'http://localhost:54109/api/persons';

            fetch(url)
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data  => this.setState({data}))
            .catch(error => this.setState({error:"There was an error in getting the persons"}));
        }
        else{
            fetch('http://proj.ruppin.ac.il/bgroup76/test1/tar3/api/persons')
            .then(this.handleErrors)
            .then(response=>response.json())
            .then(data  => this.setState({data}))
            .catch(error => this.setState({error:"There was an error in getting the persons"}));
        }
    }
        
        
    moveIndex = () => {
         if(this.state.index<filterd.length-1){
            this.setState({ index: this.state.index+1 })
            
         }
         else{
            this.setState({index: 0})    
         }
    }
    
    render() {
        
    const { classes } = this.props;
        if(this.state.data!=null){
            let g=this.props.location.data.gender;
            let min=this.props.location.data.from;
            let max=this.props.location.data.to;
            filterd=this.state.data.filter((per)=> (per.Gender==g && per.Age>=min && per.Age<=max));
            if(filterd==0){
                return (
                    <div>
                        <h1>No Matches Found :(</h1>
                        <RouteButton value="Home" pathname="/"/>  
                    </div>
                    
                )
                
            }
            var p=filterd[this.state.index];
            
            const path="http://proj.ruppin.ac.il/bgroup76/test1/tar3/"+p.Image;
            const details=p.Age + ", "+p.Address;
            return (
                <div>
                    <RouteButton value="Home" pathname="/"/>       

                    <Card className={classes.card}>
                        <CardHeader
                        title={p.Name}
                        subheader={details}
                        />
                        <CardMedia
                        className={classes.media}
                        image={path}
                        //title="Paella dish"
                        />
                        <CardContent>
                        {/* <Typography component="h3">  */}
                        {(p.Premium) && <h3>Hobbies: {p.Hobbies.map((hob,ind)=><Hobby hobby={hob} key={ind}/>)}</h3>}
                        {/* </Typography> */}
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton onClick={this.moveIndex} aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton onClick={this.moveIndex} aria-label="Cancel">
                            <CancelIcon />
                        </IconButton>
                        </CardActions>
                    </Card>

                    
                </div>
            
                
            )
        }
        else{
            return(
                <div>loading..</div>
            )
        }
    }
}
Users.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Users);   