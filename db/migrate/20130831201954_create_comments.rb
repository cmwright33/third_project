class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :content
      t.references :user
      t.references :idea
      t.datetime
      t.timestamps
    end
  end

  def down
    drop_table :comments
  end
end
