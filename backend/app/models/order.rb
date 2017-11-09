# == Schema Information
#
# Table name: orders
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  status     :string           default("ordered"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Order < ApplicationRecord
  validates :status, inclusion: { in: ["ordered", "prepared", "picked up"] }, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :ordered_items,
  primary_key: :id,
  foreign_key: :order_id,
  class_name: :OrderedItem
end
