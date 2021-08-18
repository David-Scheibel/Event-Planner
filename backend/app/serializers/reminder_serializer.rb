class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :reminder
  
  belongs_to :event
  belongs_to :profile
end
