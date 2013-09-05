ThirdProject::Application.routes.draw do


  resources :ideas

  resources :tags

  resources :votes

  resources :comments

  resources :ideas

  post '/save/idea', to: 'ideas#save'

  get '/users/:id', to: 'users#show'

  get '/index/tags', to: 'tags#index'

  get '/user/tags', to: 'tags#user_show'


  devise_for :users
    root :to => "users#index"
  end


