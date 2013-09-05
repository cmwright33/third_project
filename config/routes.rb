ThirdProject::Application.routes.draw do

  devise_for :users

  resources :ideas

  resources :tags

  resources :votes

  resources :comments

  resources :ideas
  get '/users', to: 'users#index'

  post '/save/idea', to: 'ideas#save'

  get '/users/:id', to: 'users#show'

  get '/index/tags', to: 'tags#index'

  get '/user/tags', to: 'tags#user_show'

  root :to => "welcome#index"
end


