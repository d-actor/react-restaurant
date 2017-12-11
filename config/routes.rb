Rails.application.routes.draw do
  namespace :api do
    resources :menu_items, except: [:new, :edit]
  end

  get '*other', to: 'static#index'
end
