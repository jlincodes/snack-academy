# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

puts ENV['PUBLISHABLE_KEY']
