class UserIdChanges < ActiveRecord::Migration[5.1]
  def change
    rename_column :orders, :customer_id, :user_id
  end
end
