# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  email        :string           not null
#  customer_id  :string
#  name         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null

class UserOAuth < ActiveRecord::Migration[5.1]
  def change
    # old defunct tables to be removed
    remove_column :users, :auth_key
    remove_column :users, :stripe_token

    # new tables we need for OAuth
    add_column :users, :access_token, :string
    add_column :users, :refresh_token, :string
  end
end
