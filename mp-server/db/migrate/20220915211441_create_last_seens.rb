class CreateLastSeens < ActiveRecord::Migration[6.1]
  def change
    create_table :last_seens do |t|
      t.string :location_seen
      t.string :comments
      t.integer :missing_id
      t.integer :user_id
      t.datetime :date_seen
      t.timestamps
    end
  end
end
