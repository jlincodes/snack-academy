require 'google/api_client/client_secrets'

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :signed_up?

  def current_user
    @current_user = User.find_by(params[:stripe_token])
    @current_user
  end

  # for dashboard login
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
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

  def setup_client(access_token = false, refresh_token = false)
    client_options = {
      web: {
        client_id: ENV['GOOGLE_CLIENT_ID'],
        redirect_uri: ENV['GOOGLE_REDIRECT_URI']
      }
    }

    client_options[:web][:access_token] = access_token if access_token
    client_options[:web][:refresh_token] = refresh_token if refresh_token

    client_secrets = Google::APIClient::ClientSecrets.new(client_options)
    @client = client_secrets.to_authorization
  end
end
