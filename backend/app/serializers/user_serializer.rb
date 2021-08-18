class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password

  has_one :profile
  has_many :events, through: :profile
end
