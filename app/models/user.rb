class User < ApplicationRecord
  validates :email, presence: true
  validates_uniqueness_of :email, case_sensitive: false
  validates_format_of :email, with: /@/
  validates :stripe_token, presence: true, uniqueness: true

  has_many :orders,
  primary_key: :id,
  foreign_key: :customer_id,
  class_name: :Order

  has_many :ordered_items,
  through: :orders,
  source: :ordered_items
end
