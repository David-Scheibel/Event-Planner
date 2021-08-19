import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'


const Event = ({ filterEvent }) => {

    return (
        <div>
            <h3>{filterEvent == null ? " " : `It's time for a ${filterEvent.title}!`}</h3>
        </div>
    )
}

export default Event