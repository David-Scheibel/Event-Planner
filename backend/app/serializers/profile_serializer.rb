class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :nickname

  belongs_to :user

  has_many :events

  # has_many :categories, through: :events
  # has_many :thumbnails, through: :events
end
