class ThumbnailsController < ApplicationController

    def index
        thumbnails = Thumbnail.all

        render json: @thumbnails
    end

end
