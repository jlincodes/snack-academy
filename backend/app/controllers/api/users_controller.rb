class Api::UsersController < ApplicationController
  def create
    # debugger
    Stripe.api_key = ENV['SECRET_KEY']

    @user = User.new(user_params)
    customer = Stripe::Customer.create(
      email: @user.email,
      source: @user.stripe_token
    )
    @user.customer_id = customer.id

    if @user.save
      render 'api/products/index'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :stripe_token)
  end
end
