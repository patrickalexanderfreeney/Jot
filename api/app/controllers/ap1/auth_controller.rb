class Api::V1::AuthController < ApplicationController
    skip_before_action :check_authentication, only: [:create]
    
    def create
        user = User.find_by(email: params[:email])

        
        if user &&  user.authenticate(params[:password])
            render json: {email: user.email, id: user.id, token: encode_token({user_id: user.id})}
        else
            render json: {error: "Invalid username or password!"}
        end
    end
end