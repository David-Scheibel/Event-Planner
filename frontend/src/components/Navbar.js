import { Link } from 'react-router-dom';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

export default function Navbar (updateModalShow) {
   
  return(
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