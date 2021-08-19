import React, { Component } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { withRouter } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import WelcomeSplash from '../components/WelcomeSplash'
import Navbar from '../components/Navbar'


class CalendarView extends Component {

    handleEventClick = (e) => {
        this.props.history.push(`/events/${e.event.extendedProps.id}`)
        this.props.updateEventId(e.event.extendedProps.id)
        console.log("I clicked something")
    }

    handleEventDrop = (e) => {
        console.log("I moved something")
        console.log(e.event.extendedProps.id)
    }


    render () {

        return (

            <div>

                <Navbar 
                    // updateModalShow={this.props.updateModalShow}
                    // nickname={this.props.nickname}
                />
                
                <WelcomeSplash 
                    // nickname={this.state.nickname}
                />
                
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[dayGridPlugin, interactionPlugin]}
                    editable={true}
                    events={this.props.previewEvents}
                    eventClick={this.handleEventClick}
                    eventDrop={this.handleEventDrop}
                />        

            </div>
        )
    }
}

export default withRouter(CalendarView);