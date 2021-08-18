import React, { Component } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Navbar from './Navbar'


class CreateEvent extends Component {

    render () {

        return (
            <div>

                <Navbar />

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="type" placeholder="Enter an event title" />
                        {/* <Form.Text className="text-muted">
                        Make it fun and exciting!
                        </Form.Text> */}
                    </Form.Group>

                        {/* input date selector */}

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="description" placeholder="Event description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicThumbnail">
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control type="thumbnail" placeholder="Add an event thumbnail (url)" />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default CreateEvent