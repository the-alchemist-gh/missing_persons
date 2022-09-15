class CreateMissings < ActiveRecord::Migration[6.1]
  def change
    create_table :missings do |t|
      t.string :name
      t.integer :age
      t.string :description
      t.string :image 
      t.string :location
      t.datetime :date_missing
      t.boolean :found
      t.integer :user_id
      t.timestamps
    end
  end
end
