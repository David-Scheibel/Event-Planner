class ApplicationController < ActionController::Base
    # before_action :logged_in?
    # skip_before_action :logged_in? only: [:current_user]

    # def encode_token(data)
    #     JWT.encode(data, "Pizza Tacos", "HS256")
    # end

    # def logged_in?
    #     # byebug
    #     headers = request.headers["Authorization"]
    #     token = headers.split(" ")[1]

    #     begin
    #         user_id = JWT.decode(token, "Pizza Tacos", "HS256")[0]["user_id"]
    #         @user = User.find(user_id)
    #     rescue
    #         # user is not found because token was not provided
    #         @user = nil
    #     end

    #     unless @user
    #         render json: {error: "Please login"}
    #     end
    # end

    # def current_user
    #     user
    # end
    
end
