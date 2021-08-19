import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { withRouter } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import WelcomeSplash from '../components/WelcomeSplash'
import Navbar from '../components/Navbar'


const CalendarView = ( props) => {

    const handleEventClick = (e) => {
        console.log("I clicked something")

        props.updateEventId(e.event.extendedProps.id)
        props.filterEvents(e.event.extendedProps)
        props.history.push(`/events/${e.event.extendedProps.id}`)
    }

    const handleEventDrop = (e) => {
        console.log("I moved something")

        console.log(e.event.extendedProps.id)
    }


    return (

        <div>

            <Navbar 
                updateModalShow={props.updateModalShow}
                nickname={props.nickname}
            />
            
            <WelcomeSplash 
                nickname={props.nickname}
            />
            
            <FullCalendar 
                defaultView="dayGridMonth" 
                plugins={[dayGridPlugin, interactionPlugin]}
                editable={true}
                events={props.previewEvents}
                eventClick={handleEventClick}
                eventDrop={handleEventDrop}
            />        

        </div>
    )
}

export default withRouter(CalendarView);