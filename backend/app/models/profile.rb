class Profile < ApplicationRecord
  belongs_to :user
  
  has_many :events
  has_many :reminders
  has_many :categories
  
  has_many :comments, through: :events
end
