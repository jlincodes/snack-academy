# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  email        :string           not null
#  stripe_token :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  customer_id  :string
#  name         :string
#

class User < ApplicationRecord
  validates :email, :name, :customer_id, presence: true
  validates_uniqueness_of :email, case_sensitive: false
  validates_format_of :email, with: /@/
  validates :stripe_token, presence: true, uniqueness: true

  has_many :orders,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Order

  has_many :ordered_items,
  through: :orders,
  source: :ordered_items
end
