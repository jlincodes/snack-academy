Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :products, only: %i(index create new edit update destroy)
    resources :orders, only: %i(index show create update)
    resources :ordered_items, only: :create
  end
end
