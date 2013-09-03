class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :content
      t.references :user
      t.references :comments
      t.references :votes


      t.timestamps
    end
  end
end
