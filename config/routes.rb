ThirdProject::Application.routes.draw do

  resources :ideas

  resources :tags

  resources :votes

  resources :comments


  devise_for :users
  root :to => "users#index"
end
