Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(index create) do
      collection do
        # post 'confirm'
        post 'login'
      end
    end
    resources :products, only: %i(index create new edit update destroy)
    # resources :orders, only: %i(index show create update)
    resources :ordered_items, only: :create
    resources :charges
  end
  resources :orders, only: %i(index show create update)
  resource :session, only: %i(new create)
end
