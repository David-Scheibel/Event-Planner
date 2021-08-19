class Event < ApplicationRecord
  belongs_to :profile
  has_many :categories
  
  has_many :comments
  has_many :reminders
  has_one :thumbnail
end
