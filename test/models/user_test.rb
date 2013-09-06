require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end



    describe User do
    it "orders in descending order" do
      lindeman = User.create!(first_name: "Andy", last_name: "Lindeman")
      chelimsky = User.create!(first_name: "David", last_name: "Chelimsky")

      expect(User.ordered_desc).to eq([chelimsky, lindeman])
    end
  end

  describe User do
    it "orders ideas in descending order" do
      lindeman = User.create!(first_name: "Andy", last_name: "Lindeman")
      chelimsky = User.create!(first_name: "David", last_name: "Chelimsky")
      idea1 = Idea.create!(title: "idea 1", content: "This is content")
      idea2 = Idea.create!(title: "idea 2", content: "This is content")
      lindeman.ideas << idea1
      chelimsky.ideas << idea2
    end
  end



  describe User do
    it "creates a new idea"

  end
end
