class Api::V1::UsersController < ApplicationController
    
    skip_before_action :check_authentication, only: [:create]

    def index
        users = User.all
        render json: users, include: [:thoughts]
        
    end

    def show
        user = User.find(params[:id])
        render json: user, except: [:updated_at]
    end

    def create
        user = User.new(user_params)
        if user.valid?
            user.save
        
            render json: {user: UserSerializer.new(user)}, status: :created
        else
            render json: {error: 'Failed to create user.'}, status: :not_acceptable
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, except: [:created_at, :updated_at]
    end
    
    private
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
    

end
