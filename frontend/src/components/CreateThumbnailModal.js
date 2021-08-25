import React, { useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap-form'

const ThumbnailsAPI = "http://localhost:3000/thumbnails"


const CreateThumbnailModal = (props) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const createThumbnail = (e) => {

        const postThumb = {
            image: "",
            event_id: 0
        }

        fetch(ThumbnailsAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(postThumb)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(() => alert("thumbnail post error!"))
    }

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" placeholder="Event description" />
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CreateThumbnailModal