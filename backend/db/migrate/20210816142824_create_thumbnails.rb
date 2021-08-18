class CreateThumbnails < ActiveRecord::Migration[6.1]
  def change
    create_table :thumbnails do |t|
      t.integer :event_id
      t.string :image

      t.timestamps
    end
  end
end
