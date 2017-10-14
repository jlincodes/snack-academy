class Api::OrdersController < ApplicationController
  # def index
  #   @orders = Order.all
  # end

  def create
    Stripe.api_key = ENV['SECRET_KEY']
    @order = Order.new(order_params)
    user = User.find(params[:user][:customer_id])
    begin
      charge = new_charge(user)
    rescue
      render json: charge.errors.full_messages
    else
      make_items
    end

    if @order.save
      render :index
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  # def show
  #   @order = Order.find(params[:id])
  # end
  #
  # def update
  #   @order = Order.find(params[:id])
  #   if @order.update_attributes(order_params)
  #     render :index
  #   else
  #     render json: @order.errors.full_messages, status: 422
  #   end
  # end

  private

  def order_params
    params.require(:order).permit(:user_id, :status)
  end

  def customer_id_params
    params.require
  end

  def new_charge(user)
    Stripe::Charge.create(
      amount: params[:user][:total],
      currency: 'usd',
      customer: user.customer_id,
      statement_descriptor: "Snack Overflow"
    )
  end

  def make_items
    params[:user][:items].each do |product_id|
      OrderedItem.new(product_id: product_id, order_id: @order.id).save
    end
  end
end
