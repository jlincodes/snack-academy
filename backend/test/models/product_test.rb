# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  price       :integer          not null
#  description :string           not null
#  category    :string           not null
#  inventory   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  img_url     :string           default("http://via.placeholder.com/75x75")
#

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
