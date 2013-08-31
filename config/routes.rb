ThirdProject::Application.routes.draw do
  resources :votes

  resources :comments

  devise_for :users
  root :to => "users#index"
end
