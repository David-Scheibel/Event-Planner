import React, { useEffect, useRef } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { withRouter } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import WelcomeSplash from '../components/WelcomeSplash'
import Navbar from '../components/Navbar'


const CalendarView = ( props ) => {

    const {view, ...others} = props;

    const calendarRef = useRef();

    useEffect(() => {
        changeView(view);
        console.log(view)
    }, [view]);


    const changeView = view => {
        const API = getApi();

        API && API.changeView(view);
    }

    const getApi = () => {
        const { current: calendarDom } = calendarRef;

        return calendarDom ? calendarDom.getApi() : null;
    }

    const handleEventClick = (e) => {
        console.log(`I clicked on ${e.event.extendedProps.title}`)

        props.updateEventId(e.event.extendedProps.id)
        props.filterEvents(e.event.extendedProps)
        props.history.push(`/events/${e.event.extendedProps.id}`)
    }

    const handleEventDrop = (e) => {
        console.log(`I moved ${e.event.extendedProps.title}`)

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
                ref={calendarRef}
                events={props.previewEvents}
                eventClick={handleEventClick}
                eventDrop={handleEventDrop}
                defaultView={view}
            />        

        </div>
    )
}

export default withRouter(CalendarView);