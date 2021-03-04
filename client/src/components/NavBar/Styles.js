import { makeStyles} from '@material-ui/core';

export const navBarStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      minHeight: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    appBarWrapper: {
      width:'80%',
      margin:'0 auto',
    },
    
    nav: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      boxShadow: 'none',
      color:'white',
    },
    // root: {
    //   flexGrow: 1,
    // },
    guestTitle: {
      flexGrow: 1,
    },
    image: {
      flexGrow: 1,
      marginTop: '1.5rem'
    },
    
    title: {
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        // alignSel:'center',
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'darkGrey',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
}));
  