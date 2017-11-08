class Api::OrdersController < ApplicationController

  def create
    Stripe.api_key = ENV['SECRET_KEY']
    @order = Order.new(order_params)
<<<<<<< HEAD
    user = User.find_by(fbId: params[:order][:fbId])
=======
    user = User.find_by(fbId: params[:user][:fbId])
>>>>>>> c8be5475ad40c65a069a00e9afe1dfa6a969d6b4
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
    params.require(:order).permit(:user_id, :total, :status)
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
