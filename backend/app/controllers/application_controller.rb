class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :signed_up?

  def current_user
    @current_user = User.find_by(params[:stripe_token])
    @current_user
  end

  def logged_in?
    !!current_admin
  end
end
