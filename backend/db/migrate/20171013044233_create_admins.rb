class CreateAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :admins do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :admins, :username, unique: true
  end
end
