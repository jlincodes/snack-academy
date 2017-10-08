class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :index
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def new
    @product = Product.new
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    if @product.update_attributes(product_params)
      render :index
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :index
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :description, :category, :inventory, :img)
  end
end
