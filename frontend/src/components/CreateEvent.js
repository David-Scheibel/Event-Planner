import React, { useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DateTimePicker from 'react-datetime-picker'

import Navbar from './Navbar'

const EventsAPI = "http://localhost:3000/events"

function CreateEvent (props) {

    console.log(props)

    // const [title, setTitle] = useState(null)
    const [startDateTime, setStartDateTime] = useState(null)
    const [endDateTime, setEndDateTime] = useState(null)

    const createEvent = (e) => {
        e.preventDefault()

        // console.log(e.target[0].value)
        // console.log(e.target[1].value)
        // console.log(e.target[2].value)
        console.log(startDateTime)
        console.log(endDateTime)


        const postObj = {
            title: e.target[0].value,
            descritpion: e.target[1].value,
            thumbnail: e.target[2].value,
            category: null,
            start: startDateTime,
            end: endDateTime,
            profile: {
                id: 1,
                nickname: "empty"
            }
        }
        
        console.log(postObj)

        fetch(EventsAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(postObj)
        })
            .then(res => res.json())
            .then(res => console.log(res))
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

                <Form.Group className="mb-3" controlId="formBasicThumbnail">
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control type="thumbnail" placeholder="Add an event thumbnail (url)" />
                </Form.Group>

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

export default CreateEvent