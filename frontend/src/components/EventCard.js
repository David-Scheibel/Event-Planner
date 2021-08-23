import { withRouter } from 'react-router-dom';

const EventCard = ( props ) => {

    const deleteEvent = (id) => {

        fetch(`http://localhost:3000/events/${id}`, {
            method: "DELETE",
            body: null
        })
            .then(res => res.json())
            .then(() => { props.updateRemoveEvent(id) })
            .then(props.history.push("/calendar"))
        props.reFormatEvents()
    }  

    return (
      <div className="card m-2 p-2">
        <img src={ null } className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{ props.event.title }</h4>
                <h5 className="card-title">{ props.event.start }</h5>
                <h5 className="card-title">{ props.event.end }</h5>
                <p className="card-text">{ props.event.description }</p>
                <button 
                    onClick={ () => deleteEvent(props.event.id) }
                    className="button p-1 m-1"
                    >Delete Event
                </button>
    
                <button 
                    className="button p-1 m-1"
                    onClick={ null }
                    >Add Comment
                </button>
    
            </div>
        </div>
    )
}
  
export default withRouter(EventCard)