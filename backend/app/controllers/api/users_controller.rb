class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    customer = Stripe::Customer.create(
      email: @user.email,
      name: @user.name,
      source: @user.stripe_token
    )
    @user.customer_id = customer.id
    if @user.save
      sign_up(@user)
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
