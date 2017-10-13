class Api::AdminsController < ApplicationController
  def new
  end

  def create
    @admin = Admin.new(admin_params)
    if @admin.save
      login(@admin)
      redirect_to orders_url
    end
  end

  private

  def admin_params
    params.require(:admin).permit(:username, :password)
  end
end
