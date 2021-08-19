class ThumbnailsController < ApplicationController

    def index
        thumbnails = Thumbnail.all

        render json: thumbnails
    end

    def show
        profile = Thumbnail.find(params[:id])

        render json: profile
    end

end
