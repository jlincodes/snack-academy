class Api::OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def create
    @order = Order.new(order_params)
    # customer_id == user's id
    user = User.find(params[:user][:customer_id])
    charge = new_charge
    
    params[:user][:items].each do |product_id|
      OrderedItem.new(product_id: product_id, order_id: @order.id)
    end

    if @order.save
      render :index
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def show
    @order = Order.find(params[:id])
  end

  def update
    @order = Order.find(params[:id])
    if @order.update_attributes(order_params)
      render :index
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    # customer_id == user's id
    params.require(:order).permit(:customer_id, :status)
  end

  def customer_id_params
    params.require
  end

  def new_charge
    Stripe::Charge.create(
      amount: params[:user][:total],
      currency: 'usd',
      # customer_id == user.customer_id
      customer: user.customer_id
    )
  end

  def make_items

  end
end
