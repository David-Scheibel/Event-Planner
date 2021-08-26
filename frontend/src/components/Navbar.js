import { Link } from 'react-router-dom';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core';
import { color } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    color: '#C5C6C7',
    borderColor: '#C5C6C7',
    '&:hover': {
      color: '#66fcf1',
      border: '#66fcf1',
    }
  }, 
  
  
})


export default function Navbar ({ logout }) {
  
  const classes = useStyles()
  
  return(

    <AppBar position="static" style={{ background: 'rgb(50, 79, 116)'}}>
      <Toolbar>

        <IconButton edge="start" className="appbar" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Link className="navbar_planner" to="/calendar" onClick={ null }>
          <Typography variant="h6" className={ classes.root }>
            Planner
          </Typography>
        </Link>

        <div className="button_holder" >
        <Link className="navbar_event" to="/form" onClick={ null }>
          <Button className={classes.root} >Create Event</Button>
        </Link>

        <Link className="navbar_profile" to="/profile" onClick={ null }>
          <Button className={classes.root} >Profile</Button>
        </Link>

        <Link className="navbar_logout" to="/" onClick={logout}>
          <Button className={classes.root} >Logout</Button>
        </Link>
        </div>

      </Toolbar>
    </AppBar>

    // <nav className="navbar navbar-light bg-info mb-4">

    //   <Link className="navbar_planner" to="/calendar" onClick={ null }>
    //     <span className="navbar-brand">Planner</span>
    //   </Link>
      
    //   <Link className="navbar_event" to="/form" onClick={ null }>
    //     <span className="navbar-form">Create Event</span>
    //   </Link>

    //   <Link className="navbar_profile" to="/profile" onClick={ null }>
    //     <span className="navbar-cart">Profile</span>
    //   </Link>

    //   <span>
    //     <input
    //       placeholder="search..."  
    //       className="navbar_search"
    //       onChange={ null }
    //     ></input>
    //   </span>
    // </nav>

  )
}