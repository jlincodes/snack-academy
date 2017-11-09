class ChangeFbIdtoStr < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :fbId, :string
  end
end
