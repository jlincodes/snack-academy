class User < ApplicationRecord
  validates :email, :stripe_token, presence: true, uniqueness: true
  
  has_many :orders,
  primary_key: :id,
  foreign_key: :customer_id,
  class_name: :Order

  has_many :ordered_items,
  through: :orders,
  source: :ordered_items
end
