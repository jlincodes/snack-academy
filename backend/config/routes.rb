Rails.application.routes.draw do
  root "static_pages#root"
  get 'login', to: 'auth#fetch_code'
  get 'oauth2callback', to: 'auth#oauth2callback'

  namespace :api, defaults: { format: :json } do
    get '/users/verify', to: 'users#verify'
    resources :users, only: %i(index create) do
      collection do
        post 'login'
      end
    end
    resources :products, only: %i(index create new edit update destroy)
    resources :orders, only: :create
    resources :ordered_items, only: :create
    resources :charges
  end
  resources :orders, only: %i(index show update)
  resource :session, only: %i(new create destroy)
end
