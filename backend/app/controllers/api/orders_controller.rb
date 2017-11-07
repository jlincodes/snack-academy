class Api::OrdersController < ApplicationController

  def create
    Stripe.api_key = ENV['SECRET_KEY']
    @order = Order.new(order_params)
    user = User.find_by(fbId: params.require(:order).permit(:fbId))
    if user.fbId == params[:order][:fbId]
      charge = new_charge(user)
      if @order.save!
        make_items
        render :show
      else
        render json: @order.errors.full_messages, status: 422
      end
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
      OrderedItem.create!({product_id: product_id.to_i, order_id: @order.id})
    end
  end
end
