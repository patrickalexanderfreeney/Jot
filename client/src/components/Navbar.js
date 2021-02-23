import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Nav, LogoImg, Wrapper } from '../styles/NavBar';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';
//
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const token = localStorage.token;



	const logOut = () => {
		localStorage.clear();
		history.push('/');
	};

	return token ? (
		<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
		  <Icon className={classes.title}>
      	  	<img alt="Jots" src='../src/styles/mediaAssets/jot-logo.ico' />
    	  </Icon>
          <Button color="inherit" onClick={() => {
							logOut();
						}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
		
			
	
	) : (
		<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Jots
          </Typography>
          <Button color="inherit" onClick={() => {
						history.push('/login');
					}}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
	);
};

export default NavBar;
