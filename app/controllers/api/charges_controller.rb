class Api::ChargesController < ApplicationController
  def new; end

  def create
    # amount in cents
    @amount = 500

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer => customer.id,
      :amount => @amount,
      :description => 'Rails Stripe customer',
      :currency => 'usd'
    )

  rescue Stripe::CardError => e
    flash[:errors] = e.message
    redirect_to new_charge_path
  end
end
