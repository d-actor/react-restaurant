class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.string :item
      t.text :description
      t.float :price

      t.timestamps
    end
  end
end
