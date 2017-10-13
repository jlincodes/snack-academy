class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_admin, :logged_in?

  def current_admin
    @current_admin = Admin.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_admin
  end

  def login(admin)
    @current_admin = admin
    session[:session_token] = admin.reset_session_token!
  end

  def logout
    current_admin.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end
end
