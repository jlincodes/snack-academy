class Api::OrderedItemedItemsController < ApplicationController
  def index
    @ordered_items = OrderedItem.all
  end

  def create
    @ordered_item = OrderedItem.new(ordered_item_params)
    if @ordered_item.save
      render :index
    else
      render json: @ordered_item.errors.full_messages, status: 422
    end
  end

  def new
    @ordered_item = OrderedItem.new
  end

  def edit
    @ordered_item = OrderedItem.find(params[:id])
  end

  def update
    @ordered_item = OrderedItem.find(params[:id])
    if @ordered_item.update_attributes(ordered_item_params)
      render :index
    else
      render json: @ordered_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @ordered_item = OrderedItem.find(params[:id])
    @ordered_item.delete
    render :index
  end

  private

  def ordered_item_params
    params.require(:ordered_item).permit(:order_id, :product_id)
  end
end
