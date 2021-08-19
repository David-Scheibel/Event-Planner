const EventCard = ({ event }) => {

    return (
      <div className="card m-2 p-2">
      <img src={ null } className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-title">{ event.title }</h4>
            <h5 className="card-title">{ event.start }</h5>
            <h5 className="card-title">{ event.end }</h5>
            <p className="card-text">{ event.description }</p>
            <button 
                onClick={ null }
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
  
  export default EventCard