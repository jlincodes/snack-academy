class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  require 'json_web_token'
  helper_method :current_user, :signed_up?

  def current_user
    @current_user = User.find_by(params[:stripe_token])
  end

  def signed_up?
    !!current_user
  end

  def sign_up

  end
end
