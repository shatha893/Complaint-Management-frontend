import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import cssClasses from './header.module.css';

   //---A Toolbar made by Material UI code---//
   



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
  
  export default function ButtonAppBar(props){
    const classes = useStyles();
    const menuIcon = props.hideMenu?<MenuIcon show = {props.hideMenu}/>:null;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className = {cssClasses.Toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {menuIcon}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Complaint Management System
            </Typography>

          </Toolbar>
        </AppBar>
      </div>
    );
  }


// export default function ButtonAppBar(props) {
//   const classes = useStyles();
//   const menuIcon = props.hideMenu?<MenuIcon show = {props.hideMenu}/>:null;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar className={cssClasses.Toolbar}>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             {menuIcon}
//           </IconButton>
//           <Logo/>
//           <Typography variant="h6" className={classes.title}>
//             A Better Marje3
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
  //---A Toolbar made by Material UI code---//
