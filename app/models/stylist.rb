class Stylist < ApplicationRecord
  def change
    create_table :stylists do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :salary
      t.string :picture
      t.integer :rating


      t.timestamps null: false
    end
  end
end
