import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ThumbnailsAPI = "http://localhost:3000/thumbnails"


export default function CreateEventModal (props) {

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

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}