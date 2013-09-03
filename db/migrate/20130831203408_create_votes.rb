class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :idea
      t.references :user
      t.timestamps
    end
  end


  def down
    drop_table :votes
  end
end
