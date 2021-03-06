class ProfilesController < ApplicationController

    def index
        profiles = Profile.all

        render json: profiles
    end

    def show
        profile = Profile.find(params[:id])

        render json: profile
    end
    

    private

    def profile_params
        params.permit(:nickname)
    end

end
