class Api::OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def create
    @order = Order.new(order_params)
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
    params.require(:order).permit(:customer_id, :status)
  end
end
