class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    Stripe.api_key = ENV['SECRET_KEY']

    @user = User.new(user_params)
    customer = Stripe::Customer.create(
      email: @user.email,
      source: @user.stripe_token
    )
    @user.customer_id = customer.id
    debugger
    if @user.save
      render 'api/products/index'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  #  JWT
  def login
  user = User.find_by(email: params[:email].to_s.downcase)

  if user && user.authenticate(params[:password])
      auth_token = JsonWebToken.encode({user_id: user.id})
      render json: {auth_token: auth_token}, status: :ok
  else
    render json: {error: 'Invalid username / password'}, status: :unauthorized
  end
end

  private

  def user_params
    params.require(:user).permit(:email, :name, :stripe_token)
  end
end
