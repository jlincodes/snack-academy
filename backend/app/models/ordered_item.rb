class OrderedItem < ApplicationRecord
  belongs_to :product,
  primary_key: :id,
  foreign_key: :product_id,
  class_name: :Product

  belongs_to :order,
  primary_key: :id,
  foreign_key: :order_id,
  class_name: :Order
end
