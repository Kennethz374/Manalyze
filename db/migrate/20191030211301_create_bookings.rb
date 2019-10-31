class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.references :user, foreign_key: true
      t.references :employee, foreign_key: true
      t.date :date, null: false
      t.string :notes

      t.timestamps
    end
  end
end
