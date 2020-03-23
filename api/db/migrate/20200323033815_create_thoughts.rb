class CreateThoughts < ActiveRecord::Migration[6.0]
  def change
    create_table :thoughts do |t|
      t.string :title
      t.string :tags
      t.text :body
      t.integer :user_id

      t.timestamps
    end
  end
end
