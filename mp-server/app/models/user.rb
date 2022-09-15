class User < ActiveRecord::Base
    has_many :missings
    has_many :last_seens
end