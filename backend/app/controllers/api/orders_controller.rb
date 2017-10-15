class Api::OrdersController < ApplicationController

  def create
    Stripe.api_key = ENV['SECRET_KEY']
    @order = Order.new(order_params)
    user = User.find(params[:user][:customer_id])
    charge = new_charge(user)
    make_items

    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :status)
  end

  def new_charge(user)
    Stripe::Charge.create(
      amount: params[:order][:total],
      currency: 'usd',
      customer: user.customer_id,
      statement_descriptor: "Snack Overflow"
    )
  end

  def make_items
    params[:order][:items].each do |product_id|
      OrderedItem.new(product_id: product_id, order_id: @order.id).save
    end
  end
end
