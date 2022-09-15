class Missing < ActiveRecord::Base
    has_many :last_seens
    has_many :users, through: :last_seens
end

