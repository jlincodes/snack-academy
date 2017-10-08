class AddImgToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :img_url, :string, default: "http://via.placeholder.com/75x75"
  end
end
