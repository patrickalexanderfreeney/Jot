Rails.application.routes.draw do
      post '/login', to:'auth#create'
      
      resources :users
      resources :thoughts
      
   
end
