class Product < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :price, :description, :category, :inventory, presence: true
  validates :category, inclusion: { in: %w(food drink) }

  has_many :ordered_items,
  primary_key: :id,
  foreign_key: :product_id,
  class_name: :OrderedItems
end
