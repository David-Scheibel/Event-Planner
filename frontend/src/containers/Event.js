import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

import EventCard from '../components/EventCard'
import Navbar from "../components/Navbar"


const Event = ({ event, stateRemoveEvent, logout }) => {

    return (

        <div>

            <Navbar logout={logout} />

            <div className="event">

            <h3>{event == null ? " " : `It's time for your ${event.title}!`}</h3>

            <EventCard 
                event={event}
                stateRemoveEvent={stateRemoveEvent}
            />

            </div>
        </div>
    )
}

export default Event