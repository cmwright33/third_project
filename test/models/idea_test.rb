require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

    describe Idea do
    it "orders in descending order" do

      idea1 = Idea.create!(title: "idea 1", content: "This is content")
      idea2 = Idea.create!(title: "idea 2", content: "This is content")

      expect(User.ordered_desc).to eq([idea2, idea1])
    end
  end



    describe Idea do
    it "orders Idea comments in descending order" do

      idea1 = Idea.create!(title: "idea 1", content: "This is content")
      idea2 = Idea.create!(title: "idea 2", content: "This is content")
      comment1 = Comment.create!(content: "This is content")
      comment2 = Comment.create!(content: "This ideas content")
      idea1.comments << comment1
      idea2.comments << comment2
      expect(idea2.comments.ordered_desc).to eq([comment1])
      expect(idea1.comments.ordered_desc).to eq([comment2])
    end
  end
end
