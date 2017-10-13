# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  price       :float            not null
#  description :string           not null
#  category    :string           not null
#  inventory   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  img_url     :string           default("http://via.placeholder.com/75x75")
#

class Product < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :price, :description, :category, :inventory, presence: true
  validates :category, inclusion: { in: %w(food drink) }

  has_many :ordered_items,
  primary_key: :id,
  foreign_key: :product_id,
  class_name: :OrderedItem

  has_many :orders,
  through: :ordered_items,
  source: :order

  has_many :buyers,
  through: :orders,
  source: :user
end
