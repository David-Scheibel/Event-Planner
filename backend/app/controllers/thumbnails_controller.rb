class ThumbnailsController < ApplicationController

    def index
        thumbnails = Thumbnail.all

        render json: thumbnails
    end

    def show
        profile = Thumbnail.find(params[:id])

        render json: profile
    end

    def create
        thumbnail = Thumbnail.create!(thumbnail_params)

        render json: thumbnail
    end

    def update
        thumbnail = Thumbnail.find(params[:id])

        render json: thumbnail
    end


    private

    def thumbnail_params
        params.require(:thumbnail).permit!
    end

end
