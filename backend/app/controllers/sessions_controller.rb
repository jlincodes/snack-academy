class SessionsController < ApplicationController
  # for Dashboard login
  def new
  end

  def create
    debugger
    @admin = Admin.find_by_credentials(
      params[:admin][:username],
      params[:admin][:password]
    )
    if @admin
      login(@admin)
      redirect_to orders_url
    else
      flash[:errors] = ['Invalid Login Credentials']
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
