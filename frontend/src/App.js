import React, { Component, createRef} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CalendarView from './containers/CalendarView'
import Event from './containers/Event'
import Profile from './containers/Profile'

import Login from './components/Login'
import Signup from './components/Signup'
import CreateEvent from "./components/CreateEvent"

const ProfileAPI = "http://localhost:3000/profiles"
const EventsAPI = "http://localhost:3000/events"


class App extends Component {

    constructor(props) {
        super(props);
        this.calendarRef = createRef();
    }

    state = {
        previewEvents: {},
        filteredEvent: {},

        profileId: 0,            // sets state to current user's profile
        eventId: 0,              // sets state to selected event id
        nickname: "",
        username: "",

        modalShow: false,
        date: ""                 // maybe need current date
    }



    componentDidMount() {           // make dynamic with auth
        fetch(ProfileAPI)
            .then(r => r.json())
            .then(r => this.setState({
                profileId: r[0].id,
                nickname: r[0] == null ? "null" : r[0].nickname,
                username: r[0] == null ? "null" : r[0].user.username,
                previewEvents: this.formatEvents(r[0].events)
        }))
    }

    formatEvents(r) {

        return r.map(appointment => {
            const {id, title, start, end} = appointment

            let startTime = new Date(start)
            let endTime = new Date(end)

            return {
                id, 
                title, 
                start: startTime,
                end: endTime, 
                extendedProps: {...appointment}
            }
        })
    }

    // componentDidUpdate(prevProps) {
    //     console.log("component did update fired")
    //     console.log(prevProps)
    //     const { view: prevView } = prevProps;
    //     const { view } = this.props;
    
    //     if (prevView !== view) {
    //       this.changeView(view);
    //     }
    //     console.log(view)
    // }

    // changeView = view => {
    //     const API = this.getApi();
    
    //     API && API.changeView(view);
    // };

    // getApi = () => {
    //     const { current: calendarDom } = this.calendarRef;
    
    //     return calendarDom ? calendarDom.getApi() : null;
    // };

    updateAddEvent = (e) => {this.setState({ previewEvents: [...this.state.previewEvents, e] }, () => {
        this.formatEvents([...this.state.previewEvents, e])
    })}

    updateRemoveEvent = (e) => {this.setState({ previewEvents: this.state.previewEvents.filter(previewEvents => previewEvents.id !== e )})}

    updateEventId = (e) => {this.setState({ eventId: e })}

    updateModalShow = (bool) => {
        this.setState({modalShow: bool})
        console.log("updateModalShow was clicked")
    }

    handleEventDrop = (e) => {
        console.log("I moved something")
        console.log(e)
        console.log(e.event.extendedProps.title)
        console.log(e.event.extendedProps.id)
    }

    filterEvents = (e) => {this.setState({ filteredEvent: e})}

    trigger = (e) => {
        console.log(e)
    }
   

    render () {

        // const { view, ...others } = this.props

        return (
        <BrowserRouter>
            <div className="App">

            <Switch>
                <Route path='/' exact><Login /></Route>

                <Route path='/signup' component={Signup}/>

                <Route path='/calendar'>
                    <CalendarView 
                        previewEvents={this.state.previewEvents}
                        nickname={this.state.nickname}
                        modalShow={this.state.modalShow}
                        profileId={this.state.profileId}
                        updateModalShow={this.updateModalShow}
                        handleEventDrop={this.handleEventDrop}
                        updateEventId={this.updateEventId}
                        filterEvents={this.filterEvents}
                        // calendarRef={this.calendarRef}
                        // view={view}
                        view="dayGridMonth"
                    />
                </Route>

                <Route path='/events/:id'>
                    <Event 
                        event={this.state.filteredEvent}
                        updateRemoveEvent={this.updateRemoveEvent}
                    />
                </Route>

                <Route path='/form'>
                    <CreateEvent
                        profileId={this.state.profileId}
                        nickname={this.state.nickname}
                        updateAddEvent={this.updateAddEvent}
                    />
                </Route>

                <Route path='/profile'>
                    <Profile 
                        profileId={this.state.profileId}
                    />
                </Route>

            </Switch>

            </div>
        </BrowserRouter>
        );
    }
}

export default App;
