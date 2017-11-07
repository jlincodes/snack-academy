class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def verify
    # p params
    @user = User.find_by(auth_key: params[:user][:auth_key])
    if @user
      render :show
    else
      # puts "ERROR HERE: #{@user.errors.full_messages}"
      render json: "No such user found!", status: 404
    end
  end

  def create
    Stripe.api_key = ENV['SECRET_KEY']

    @user = User.new(user_params)
    customer = Stripe::Customer.create(
      email: @user.email,
      source: @user.stripe_token
    )
    @user.customer_id = customer.id
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :stripe_token, :fbId)
  end
end
