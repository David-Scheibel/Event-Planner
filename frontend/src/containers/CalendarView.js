import React, { useState, useEffect, useRef } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { withRouter } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import WelcomeSplash from '../components/WelcomeSplash'
import Navbar from '../components/Navbar'

const EventsAPI = "http://localhost:3000/events"


const CalendarView = ( props ) => {

    const [startDateTime, setStartDateTime] = useState(null)
    const [endDateTime, setEndDateTime] = useState(null)

    const {view, ...others} = props;
    const calendarRef = useRef();

    useEffect(() => {
        changeView(view);
        // console.log(view)
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
        e.preventDefault()

        let parseStart = e.event.extendedProps.start
        let parseEnd = e.event.extendedProps.end

        let parseStartDate = `${parseStart.getMonth()+1}/${parseStart.getDate()}/${parseStart.getFullYear()}`
        let parseStartTime = `${parseStart.getHours()}:${parseStart.getMinutes()}`
        let concStartDateTime = `${parseStartDate} ${parseStartTime}`

        let parseEndDate = `${parseEnd.getMonth()+1}/${parseEnd.getDate()}/${parseEnd.getFullYear()}`
        let parseEndTime = `${parseEnd.getHours()}:${parseEnd.getMinutes()}`
        let concEndDateTime = `${parseEndDate} ${parseEndTime}`

        console.log(`I moved ${e.event.extendedProps.title}`)

        console.log(e.event.extendedProps.id)
        props.updateEventId(e.event.extendedProps.id)

        const updateEvent = {
            title: e.event.extendedProps.title,
            description: e.event.extendedProps.description,
            start: concStartDateTime,
            end: concEndDateTime,
            profile_id: e.extendedProps.id
        }

        fetch(EventsAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(updateEvent)
        })
            .then(res => res.json())
            .then(newEvent => {props.updateAddEvent(newEvent)})
            .then(console.log("posted new event object!"))
            .then(props.history.push("/calendar"))
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
                plugins={[dayGridPlugin, interactionPlugin]}
                editable={true}
                ref={calendarRef}
                defaultView={view}
                events={props.previewEvents}
                eventClick={handleEventClick}
                eventDrop={handleEventDrop}
            />        

        </div>
    )
}

export default withRouter(CalendarView);