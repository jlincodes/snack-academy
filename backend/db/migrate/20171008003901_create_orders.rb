class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :customer_id, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
