class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :gender
      t.string :password_digest
      t.string :phoneNumber
      t.string :pictures

      t.timestamps
    end
  end
end
