class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|

      t.timestamps
    end
  end


  def down
    drop_table :votes
  end
end
