import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

import EventCard from '../components/EventCard'
import Navbar from "../components/Navbar"


const Event = ({ event, updateRemoveEvent, reFormatEvents }) => {

    return (
        <div>

            <Navbar />

            <h3>{event == null ? " " : `It's time for your ${event.title}!`}</h3>

            <EventCard 
                event={event}
                updateRemoveEvent={updateRemoveEvent}
                reFormatEvents={reFormatEvents}
            />

        </div>
    )
}

export default Event