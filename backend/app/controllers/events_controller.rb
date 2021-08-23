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
        event.update(event_params)

        render json: event
    end

    # def update
    #     post = Post.find_by(id: params[:id])
    #     # byebug

    #     post.assign_attributes(event_params)
    #     if post.valid?
    #         post.save
    #         render json: post, status: :created
    #     else
    #         render json: {errors: post.errors.full_messages}, status: 422
    #     end
    # end

    def show
        event = Event.find(params[:id])

        render json: event
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy

        render json: {}
    end

    
    private

    def event_params
        params.require(:event).permit!
    end

end
