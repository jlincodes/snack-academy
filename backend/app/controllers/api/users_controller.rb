class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find_by(:customer_id, params[:user][:customer_id])
    if @user
      render :show
    else
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
    params.require(:user).permit(:email, :name, :stripe_token)
  end
end
