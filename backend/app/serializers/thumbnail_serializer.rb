class ThumbnailSerializer < ActiveModel::Serializer
  attributes :id, :image
  
  belongs_to :event
end
