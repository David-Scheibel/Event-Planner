import React, { Component, createRef} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CalendarView from './containers/CalendarView'
import Event from './containers/Event'
import Profile from './containers/Profile'

import Login from './components/Login'
import Signup from './components/Signup'
import CreateEvent from "./components/CreateEvent"
import { CssBaseline } from '@material-ui/core';

const ProfileAPI = "http://localhost:3000/profiles"


class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.calendarRef = createRef();
    // }

    state = {
        previewEvents: {},
        profileEvents: {},      // jerry rigged to give a second previewEvents for Profile view, can refine
        filteredEvent: {},
        profileObj: {},

        profileId: 0,            // reformat to use localStorage?
        eventId: 0,
        nickname: "",
        username: "",

        modalShow: false,
        isUpdate: false,
        testView: "dayGridMonth",
        date: ""                 // maybe need current date
    }


    componentDidMount() {
        let profileID = localStorage.userID-1

        fetch(ProfileAPI)
            .then(r => r.json())
            .then(r => this.setState({
                profileId: r[profileID].id,
                nickname: r[profileID] == null ? "null" : r[profileID].nickname,
                username: r[profileID] == null ? "null" : r[profileID].user.username,
                previewEvents: this.formatEvents(r[profileID].events)
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

    reFormatEvents() {
        let profileID = localStorage.userID-1

        fetch(ProfileAPI)
            .then(r => r.json())
            // .then(r => console.log(r[0].events))
            .then(r => this.setState({
                previewEvents: this.formatEvents(r[profileID].events)
            }))
            .then(console.log("reFormatEvents"))
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

    stateAddEvent = (e) => {
        this.setState({ 
            previewEvents: [...this.state.previewEvents, e], 
            isUpdate: true, 
            testView: "dayGridWeek" }, () => {
                this.formatEvents([...this.state.previewEvents, e])
                this.setState({ isUpdate: false })
                this.setState({ testView: "dayGridMonth"})
            })
    }

    stateRemoveEvent = (e) => {
        this.setState({ 
            previewEvents: this.state.previewEvents.filter( previewEvents => previewEvents.id !== e )
        })
    }

    stateUpdateEvent = (e) => {           // drag/drop: doesn't work due to API nonsense, FIX
        // console.log(e)

        const updateObj = {
            id: e.id,
            title: e.title,
            start: e.start,
            end: e.end,
            extendedProps: {
                profile_id: e.profile_id,
                comments: e.comments,
                thumbnail: e.thumbnail,
                reminders: e.reminders,
                categories: e.categories
            }
        }

        // console.log(updateObj)

        const eventCopy = [...this.state.previewEvents]
        const eventRemove = eventCopy.filter(events => events.id !== e.id )
        const eventReplace = [...eventRemove, updateObj]

        // console.log(eventReplace)
        // this.setState({ previewEvents: [...eventReplace] })      // uncomment for function to updateDOM
    }

    updateEventId = (e) => {this.setState({ eventId: e })}          // collapse function into updateEvent

    updateModalShow = (bool) => {
        this.setState({modalShow: bool})
        console.log("updateModalShow was clicked")
    }

    filterEvents = (e) => {this.setState({ filteredEvent: e })}

    isUpdate = () => {this.setState({ isUpdate: !this.state.isUpdate })}

    handleDateSelect = (selectInfo) => {

        console.log(`I clicked on ${selectInfo.startStr}`)

        // let title = prompt('Please enter a new title for your event')
        // let calendarApi = selectInfo.view.calendar
    
        // calendarApi.unselect() // clear date selection
    
        // if (title) {
        //     calendarApi.addEvent({
        //         id: 0,
        //         title,
        //         start: selectInfo.startStr,
        //         end: selectInfo.endStr,
        //         allDay: selectInfo.allDay
        //     })
        // }
    }

    logout = () => {
        this.setState({
            previewEvents: {},
            profileEvents: {},
            filteredEvent: {},
            profileObj: {},
    
            profileId: 0,
            eventId: 0,

            nickname: "",
            username: ""
        })
        localStorage.clear();
    }
   

    render () {

        // const { view, ...others } = this.props

        console.log(this.state.previewEvents)

        return (
        <BrowserRouter>
            <div className="App">

            <CssBaseline>
            <Switch>
                <Route path='/' exact><Login /></Route>

                <Route path='/signup' component={Signup}/>

                <Route path='/calendar'>
                    <CalendarView 
                        previewEvents={this.state.previewEvents}
                        nickname={this.state.nickname}
                        profileId={this.state.profileId}
                        modalShow={this.state.modalShow}
                        filterEvents={this.filterEvents}
                        updateModalShow={this.updateModalShow}
                        stateUpdateEvent={this.stateUpdateEvent}
                        handleDateSelect={this.handleDateSelect}
                        updateEventId={this.updateEventId}
                        isUpdate={this.state.isUpdate}
                        testView={this.state.testView}
                        // calendarRef={this.calendarRef}
                        // view={view}
                        view="dayGridMonth"
                        logout={this.logout}
                    />
                </Route>

                <Route path='/events/:id'>
                    <Event 
                        event={this.state.filteredEvent}
                        stateRemoveEvent={this.stateRemoveEvent}
                        isUpdate={this.isUpdate}
                        reFormatEvents={this.reFormatEvents}
                        logout={this.logout}
                    />
                </Route>

                <Route path='/form'>
                    <CreateEvent
                        profileId={this.state.profileId}
                        nickname={this.state.nickname}
                        stateAddEvent={this.stateAddEvent}
                        isUpdate={this.isUpdate}
                        logout={this.logout}
                    />
                </Route>

                <Route path='/profile'>
                    <Profile 
                        profileId={this.state.profileId}
                        logout={this.logout}
                    />
                </Route>

                <Login userLogin={this.userLogin} />

            </Switch>
            </CssBaseline>

            </div>
        </BrowserRouter>
        );
    }
}

export default App;
