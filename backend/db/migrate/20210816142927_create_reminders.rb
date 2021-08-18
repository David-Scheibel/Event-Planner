class CreateReminders < ActiveRecord::Migration[6.1]
  def change
    create_table :reminders do |t|
      t.integer :event_id
      t.integer :profile_id
      t.integer :reminder

      t.timestamps
    end
  end
end
