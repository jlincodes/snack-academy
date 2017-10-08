class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :stripe_token, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :stripe_token, unique: true
  end
end
