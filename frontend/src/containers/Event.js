import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

import EventCard from '../components/EventCard'


const Event = ({ event, updateRemoveEvent }) => {

    return (
        <div>
            <h3>{event == null ? " " : `It's time for a ${event.title}!`}</h3>

            <EventCard 
                event={event}
                updateRemoveEvent={updateRemoveEvent}
            />

        </div>
    )
}

export default Event