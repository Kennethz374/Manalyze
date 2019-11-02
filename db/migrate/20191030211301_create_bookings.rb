class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.references :user, foreign_key: true, index: false
      t.references :employee, foreign_key: true, index: false
      t.datetime :date, null: false
      t.string :notes
      t.references :service

      t.timestamps
    end
  end
end
