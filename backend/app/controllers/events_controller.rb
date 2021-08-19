class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        events = Event.all

        render json: events
    end

    def create
        event = Event.create!(event_params)

        render json: event
    end

    def update
        event = Event.find(params[:id])

        render json: event
    end

    def show
        event = Event.find(params[:id])

        render json: event
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
    end

    
    private

    def event_params
        params.require(:event).permit!
    end

end
