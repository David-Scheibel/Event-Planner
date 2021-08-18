class EventsController < ApplicationController

    def index
        events = Event.all

        render json: events
    end

    def create
        event = event.create(event_params)

        if event.valid?
            render json: event
        else
            render json: {error: "Unable to create this event."}
        end
    end

    def update
        event = Event.find(params[:id])

        render json: event
    end

    def show
        event = Event.find(params[:id])

        render json: event
    end

    
    private

    def event_params
        params.require(:event).permit!
    end

end
