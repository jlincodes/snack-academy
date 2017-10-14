class Api::OrdersController < ApplicationController
  # def index
  #   @orders = Order.all
  # end

  def create
    # sets api key
    Stripe.api_key = ENV['SECRET_KEY']
    # creates order with specified user and 'ordered' status
    @order = Order.new(order_params)
    @order.status = 'ordered'
    # find that specified user
    user = User.find(@order.user_id)
    begin
      charge = new_charge(user)
    rescue
      render json: charge.errors.full_messages, status: 422
    else
      make_items
    end

    if @order.save
      render :index
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    params.require(:user).permit(:user_id)
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
    item_list = params[:order][:items]
    order_id = @order.id
    item_list.each do |item_id|
      OrderedItem.new({order_id: order_id, product_id: item_id}).save
    end
  end
end
