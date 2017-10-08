class Order < ApplicationRecord
  validates :status, inclusion: { in: ["ordered", "prepared", "picked up"] }, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :customer_id,
  class_name: :User

  has_many :ordered_items,
  primary_key: :id,
  foreign_key: :order_id,
  class_name: :OrderedItem
end
