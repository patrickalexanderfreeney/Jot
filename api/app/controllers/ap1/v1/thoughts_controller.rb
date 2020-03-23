class Ap1::V1::ThoughtsController < ApplicationController
    
        skip_before_action :check_authentication
        
        def index
            @thoughts = Thought.all
            render json: @thoughts
        end
    
        def show
            thought = Thought.find_by(id: params[:id])
            if thought 
                render json: thought, except: [:updated_at]
            else
                render json: {message: 'thought not found'}
            end
        end
        
        def create
            thought = Thought.create(thought_params)
            render json: thought, except: [:updated_at]
            
        end
    
        def new
            @thought = Thought.new(thought_params)
        end
    
        def update
            thought = Thought.find(params[:id])
            thought.update(thought_params)
            render json: thought, except: [:updated_at]
        end
    
        def destroy
            thought = Thought.find(params[:id])
            thought.destroy
        end
    
        private
        def thought_params
            params.require(:thought).permit(:title, :body, :tags, :user_id)
        end
    
end
