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
#  auth_key     :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
