class UserSecureKey < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :auth_key, :string
  end
end
