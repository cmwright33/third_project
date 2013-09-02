class CreateJoinTable < ActiveRecord::Migration
  def change
    create_table :ideas_tags, :id => false do |t|
      t.integer :idea_id
      t.integer :tag_id
    end
  end
end
