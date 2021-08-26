import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const EventAPI = "http://localhost:3000/events"


const CreateEventModal = (props) => {

    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" parentSelector={()=> document.getElementById('navbar-form')}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{textAlign: 'center'}}>
                        TEST TEXT
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={ null }>Submit</Button>
                    <Button variant="danger" onClick={ null }>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateEventModal