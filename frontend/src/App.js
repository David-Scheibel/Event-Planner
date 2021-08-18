import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CalendarView from './containers/Calendar'
import Event from './containers/Event'
import Profile from './containers/Profile'

import Login from './components/Login'
import Signup from './components/Signup'
import CreateEvent from "./components/CreateEvent"


function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          
          <Route path='/' exact><Login /></Route>

          <Route path='/signup' component={Signup}/>

          <Route path='/calendar' component={CalendarView}/>

          <Route path='/event' component={Event}/>

          <Route path='/form' component={CreateEvent}/>

          <Route path='/profile' component={Profile}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
