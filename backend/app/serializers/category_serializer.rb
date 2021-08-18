class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :event

  # has_many :profiles, through: :events
end
