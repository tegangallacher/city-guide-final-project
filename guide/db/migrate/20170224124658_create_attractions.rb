class CreateAttractions < ActiveRecord::Migration[5.0]
  def change
    create_table :attractions do |t|
      t.text :name
      t.decimal :price
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
