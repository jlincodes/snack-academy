class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.string :description, null: false
      t.string :type, null: false
      t.integer :inventory, null: false

      t.timestamps
    end

    add_index :products, :name, unique: true
  end
end
