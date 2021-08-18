import React, { Component } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import WelcomeSplash from '../components/WelcomeSplash'
import Navbar from '../components/Navbar'
import CreateEvent from '../components/CreateEvent'


const ProfileAPI = "http://localhost:3000/profiles"


class CalendarView extends Component {

    state = {
        previewEvents: {},

        profileId: 0,            // sets state to current user's profile
        nickname: "",
        username: "",

        modalShow: false,
        date: ""               // maybe need current date
    }

    // user auth token componentDidMount (not working)
    // componentDidMount = () => {
    //     // Let's fetch logged in person's id
    //     fetch(UserAPI, {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.token}`
    //         }
    //     })
    //         .then(user => user.json())
    //         .then(user => {

    //             console.log(user)
              
    //             const profileIndex = user.map(elem => elem.id).findIndex(elem => elem == localStorage.userID)
    //             const profileObj = user[profileIndex]

    //             console.log(profileIndex, profileObj)
    //             // this.setState({ nickname: profileObj.nickname })
    //             // this.setState({ username: profileObj.user.username})
    //             // this.setState({ profileObj: profileObj })
    //     })
           
    //     fetch(EventAPI)
    //         .then(r => r.json())
    //         .then(r => {
    //             // console.log(r[0].name)
    //             this.setState({ eventsObj: r })
    //     })
    // }


    componentDidMount() {           // make dynamic with auth
        fetch(ProfileAPI)
            .then(r => r.json())
            // .then(r => console.log(r[0].user.username))
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

    updateModalShow = (bool) => {
        this.setState({modalShow: bool})
        console.log("updateModalShow was clicked")
    }

    handleEventClick = (e) => {
        console.log("I clicked something")
        console.log(e)
        console.log(e.event.extendedProps.title)
        console.log(e.event.extendedProps.id)
    }

    handleEventDrop = (e) => {
        console.log("I moved something")
        console.log(e)
        console.log(e.event.extendedProps.title)
        console.log(e.event.extendedProps.id)
    }


    render () {

        return (
            <React.Fragment>
                <div>

                    <Navbar 
                        updateModalShow={this.state.updateModalShow}
                    />
                    
                    <WelcomeSplash 
                        nickname={this.state.nickname}
                    />
                    
                    <FullCalendar 
                        defaultView="dayGridMonth" 
                        plugins={[dayGridPlugin, interactionPlugin]}
                        editable={true}
                        events={this.state.previewEvents}
                        eventClick={this.handleEventClick}
                        eventDrop={this.handleEventDrop}
                    />

                    <CreateEvent 
                        nickname={this.state.nickname}
                        profileId={this.state.profile}
                    />

                </div>
            </React.Fragment>
        )
    }
}

export default CalendarView