//imports needed for fancy navbar
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
//Other imports
import { useHistory } from 'react-router';
import React from 'react';


//I played around with the makeStyles method in Material-UI
//this makeStyles method is a CSS-in-JS solution that makes it
//easier to style without using CSS directly.
const useStyles = makeStyles((theme) => ({
    //Styles applied to the root element.
    root: {
      flexGrow: 1,
    },
    //Styles applied to the menuButton
    menuButton: {
      marginRight: theme.spacing(2),
    },
    //Styles applied to the title
    title: {
      flexGrow: 1,
    },
  }));



function Header() {
const history = useHistory();
//declare classes to make it easier to access in className
const classes = useStyles();
//declare history as useHistory


//FUNCTION - takes us to the Home page when we click on the home button
const handleHome = () => {
    history.push('/');
}

//FUNCTION - takes us to the addMovie page
const handleAddMovie = () => {
    history.push('/addMovie');
}
    return (
<div className="appBar">
<AppBar position="static">
  <Toolbar>
    <IconButton onClick={handleHome} className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
      <HomeIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      The Movies Saga!
    </Typography>
    <Button onClick={handleAddMovie} color="inherit">Add Movie</Button>
  </Toolbar>
</AppBar>
</div>
    )
}

export default Header;