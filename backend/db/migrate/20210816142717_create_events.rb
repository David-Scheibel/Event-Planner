class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :profile_id
      t.string :title
      t.string :start
      t.string :end
      t.string :description

      t.timestamps
    end
  end
end
