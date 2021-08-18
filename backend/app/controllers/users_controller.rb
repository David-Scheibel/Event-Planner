class UsersController < ApplicationController

    # skip_before_action :logged_in?, only: [:create, :login, :index, :update]

    def index
        users = User.all

        render json: users
    end

    def show
        user = User.find(params[:id])

        render json: user
    end

    def create
        user = User.create(user_params)

        if user.valid?
            render json: user
        else
            render json: {error: "Unable to create this user."}
        end
    end

    def update
        user = User.find(params[:id])

        render json: user
    end

    def login
        # byebug
        
        # user = User.find_by(email: params[:email])
        # if user && user.authenticate(params[:password])
        #     # render json: {current_user: current_user, user_id: user.id, email: user.email, token: encode_token({user_id: user.id}), message: "Logging in!"}
        #     render json: {email: user.email, message: "Logging in!"}
        # else
        #     render json: {message: "Wrong username or password"}
        # end
    end


    private

    def user_params
        params.permit(:username, :email, :password)
    end

end
