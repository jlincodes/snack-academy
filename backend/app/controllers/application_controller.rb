class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  require 'json_web_token'
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

  protected
  # Validates the token and user and sets the @current_user scope
  def authenticate_request!
    if !payload || !JsonWebToken.valid_payload(payload.first)
      return invalid_authentication
    end

    load_current_user!
    invalid_authentication unless @current_user
  end

  # Returns 401 response. To handle malformed / invalid requests.
  def invalid_authentication
    render json: {error: 'Invalid Request'}, status: :unauthorized
  end

  private
  # Deconstructs the Authorization header and decodes the JWT token.
  def payload
    auth_header = request.headers['Authorization']
    token = auth_header.split(' ').last
    JsonWebToken.decode(token)
  rescue
    nil
  end

  # Sets the @current_user with the user_id from payload
  def load_current_user!
    @current_user = User.find_by(id: payload[0]['user_id'])
  end
end
