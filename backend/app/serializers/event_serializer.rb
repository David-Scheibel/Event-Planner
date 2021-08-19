class EventSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :title, :start, :end, :description, :comments, :reminders, :categories, :thumbnail

  belongs_to :profile
  has_many :categories

  has_many :comments
  has_many :reminders
end
