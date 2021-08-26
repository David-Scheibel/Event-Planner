import { Link } from 'react-router-dom';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default function Navbar ({ logout }) {
   
  return(

    <AppBar position="static">
      <Toolbar>

        <IconButton edge="start" className="appbar" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Link className="navbar_planner" to="/calendar" onClick={ null }>
          <Typography variant="h6" className={ null }>
            Planner
          </Typography>
        </Link>

        <div className="button_holder">
        <Link className="navbar_event" to="/form" onClick={ null }>
          <Button edge="finish" color="inherit">Create Event</Button>
        </Link>

        <Link className="navbar_profile" to="/profile" onClick={ null }>
          <Button edge="finish" color="inherit">Profile</Button>
        </Link>

        <Link className="navbar_logout" to="/" onClick={logout}>
          <Button edge="finish" color="inherit">Logout</Button>
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