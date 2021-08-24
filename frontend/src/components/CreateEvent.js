import React, { useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DateTimePicker from 'react-datetime-picker'
import { withRouter } from 'react-router-dom';

import Navbar from './Navbar'

const EventsAPI = "http://localhost:3000/events/"


const CreateEvent = ( props ) => {

    const [startDateTime, setStartDateTime] = useState(null)
    const [endDateTime, setEndDateTime] = useState(null)

    const createEvent = (e) => {
        e.preventDefault()

        let parseStart = new Date(startDateTime)
        let parseEnd = new Date(endDateTime)

        let parseStartDate = `${parseStart.getMonth()+1}/${parseStart.getDate()}/${parseStart.getFullYear()}`
        let parseStartTime = `${parseStart.getHours()}:${parseStart.getMinutes()}`
        let concStartDateTime = `${parseStartDate} ${parseStartTime}`

        let parseEndDate = `${parseEnd.getMonth()+1}/${parseEnd.getDate()}/${parseEnd.getFullYear()}`
        let parseEndTime = `${parseEnd.getHours()}:${parseEnd.getMinutes()}`
        let concEndDateTime = `${parseEndDate} ${parseEndTime}`


        const postEvent = {
            title: e.target[0].value,
            description: e.target[1].value,
            start: concStartDateTime,
            end: concEndDateTime,
            profile_id: props.profileId
        }

        fetch(EventsAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(postEvent)
        })
            .then(res => res.json())
            .then(newEvent => {props.stateAddEvent(newEvent)})
            .then(props.isUpdate())
            .then(console.log("Posted new event object!"))
            .then(props.history.push("/calendar"))
            .catch(() => alert("event post error!"))
    }


    return (

        <div>
            <Navbar />

            <Form onSubmit={(e) => createEvent(e)} style={{maxWidth: '300px', width: '50%', margin: 'auto'}}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control 
                        type="type" 
                        placeholder="Enter an event title" 
                        // onChange={ title => setTitle(title) } 
                        // value={ title } 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" placeholder="Event description" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicThumbnail">
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control type="thumbnail" placeholder="Add an event thumbnail (url)" />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicTitle"> 
                    <Form.Label>Start Date</Form.Label>
                    <DateTimePicker
                        onChange={ date => setStartDateTime(date) }
                        value={ startDateTime }
                        DisableClock={ true }
                        minDate={ new Date() }
                        // format={ "mm/dd/yyyy hh:mm"}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle"> 
                    <Form.Label>End Date</Form.Label>
                    <DateTimePicker
                        onChange={ date => setEndDateTime(date) }
                        value={ endDateTime }
                        DisableClock={ true }
                        minDate={ new Date() }
                        // format={ "mm/dd/yyyy hh:mm"}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default withRouter(CreateEvent)