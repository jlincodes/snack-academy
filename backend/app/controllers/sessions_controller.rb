class SessionsController < ApplicationController
  def new
  end

  def create
    @admin = Admin.find_by_credentials(
      params[:admin][:username],
      params[:admin][:password]
    )
    if @admin
      login(@admin)
      redirect_to '/orders'
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
