import { Link } from 'react-router-dom';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default function Navbar ( updateModalShow ) {
   
  return(

    // <AppBar position="static">
    //   <Toolbar>
    //     <IconButton edge="start" className="appbar" color="inherit" aria-label="menu">
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" className={ null }>
    //       Planner
    //     </Typography>
    //     <Button edge="finish" color="inherit">Profile</Button>
    //   </Toolbar>
    // </AppBar>

    <nav className="navbar navbar-light bg-info mb-4">
      <Link to="/calendar" onClick={ null }>
        <span className="navbar-brand">Planner</span>
      </Link>
      
      <Link to="/form" onClick={ null }>
        <span className="navbar-form">Create Event</span>
      </Link>

      <Link to="/profile" onClick={ null }>
        <span className="navbar-cart">Profile</span>
      </Link>

      <span>
        <input
          placeholder="search..."  
          className="search"
          onChange={ null }
        ></input>
      </span>
    </nav>

  )
}