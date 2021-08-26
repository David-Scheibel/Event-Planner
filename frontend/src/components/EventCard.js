import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

import CreateThumbnailModal from './CreateThumbnailModal'

const ThumbnailsAPI = "http://localhost:3000/thumbnails/"


const EventCard = ( props ) => {

    const deleteEvent = (id) => {

        fetch(`http://localhost:3000/events/${id}`, {
            method: "DELETE",
            body: null
        })
            .then(res => res.json())
            .then(() => { props.stateRemoveEvent(id) })
            .then(props.history.push("/calendar"))
    }  

    // console.log(props.event)

    return (

        <div className="event_card">
            <Card style={{ width: '25rem' }}>

                { props.event.thumbnail == null ? 
                    <Button >Upload Image</Button> : 
                    <Card.Img variant="top" src= { props.event.thumbnail.image }/> 
                }

                <Card.Body>
                    <Card.Title> { props.event.title } </Card.Title>
                    <Card.Text> { props.event.description } </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                    <ListGroupItem>Start: { props.event.start } </ListGroupItem>

                    { props.event.end == "" ? "" :
                        <ListGroupItem>End: { props.event.end } </ListGroupItem>
                    }  

                    { props.event.reminders >0 ? 
                        <ListGroupItem>Reminders: { props.event.reminders.count } </ListGroupItem> : 
                        "Reminders: None" 
                    }

                </ListGroup>
                <Card.Body>
                    <Button 
                        variant="primary" 
                        onClick={ null }
                        >Edit
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={ () => deleteEvent(props.event.id) }
                        >Delete
                    </Button>
                    <Button variant="primary">Comment</Button>
                    {/* <Card.Link href="#">Delete</Card.Link>
                    <Card.Link href="#">Comment</Card.Link> */}
                </Card.Body>
            </Card>

            {/* <CreateThumbnailModal /> */}
        </div>

        // <div className="card m-2 p-2">
        //     <img src={ null } className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <h4 className="card-title">{ props.event.title }</h4>
        //             <h5 className="card-title">{ props.event.start }</h5>
        //             <h5 className="card-title">{ props.event.end }</h5>
        //             <p className="card-text">{ props.event.description }</p>
        //         <button 
        //             onClick={ () => deleteEvent(props.event.id) }
        //             className="button p-1 m-1"
        //             >Delete Event
        //         </button>
    
        //         <button 
        //             className="button p-1 m-1"
        //             onClick={ null }
        //             >Add Comment
        //         </button>
        //     </div>
        // </div>

    )
}
  
export default withRouter(EventCard)