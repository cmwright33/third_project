ThirdProject::Application.routes.draw do
  resources :ideas

  devise_for :users
  root :to => "users#index"
end
