class LastSeen < ActiveRecord::Base
    belongs_to :user
    belongs_to :missing
end