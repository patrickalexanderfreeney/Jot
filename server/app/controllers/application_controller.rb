class ApplicationController < ActionController::API
        
    before_action :check_authentication
    
    def encode_token(payload)
      JWT.encode(payload, "SecretKey", "HS256") 
    end

    def auth_header
       
      request.headers['Authorization']
       
    end
    
   
    def current_user

        if decoded_token

          user_id = decoded_token["user_id"]
  
          User.find(user_id)
        end
    end
    
    def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
            puts token
    
          begin
    
           JWT.decode(token,"SecretKey")[0] 
            
          rescue JWT::DecodeError
            nil
          end
        end
    end
    
    
    def check_authentication
        render json: { error: 'Please log in' }, status: 401 if !logged_in?
    end
    
    
    def logged_in?
        
        !!current_user
    end
end
