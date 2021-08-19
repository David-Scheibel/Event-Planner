import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

import EventCard from '../components/EventCard'


const Event = ({ filterEvent }) => {

    return (
        <div>
            <h3>{filterEvent == null ? " " : `It's time for a ${filterEvent.title}!`}</h3>

            <EventCard event={filterEvent}/>

        </div>
    )
}

export default Event