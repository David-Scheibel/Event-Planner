Rails.application.routes.draw do
  resources :comments
  resources :categories
  resources :reminders
  resources :thumbnails
  resources :events
  resources :profiles
  resources :users

  post "/login/", to: "users#login"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
