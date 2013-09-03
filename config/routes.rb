ThirdProject::Application.routes.draw do


  resources :ideas

  resources :tags

  resources :votes

  resources :comments

  resources :ideas

  post '/save/idea', to: 'ideas#save'


  devise_for :users
  root :to => "users#index"
end
