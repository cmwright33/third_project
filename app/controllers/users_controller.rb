class UsersController < ApplicationController

  def index
      @user = User.first
      @user = current_user
      @user_ideas = @user.ideas.order("created_at DESC")
      @user_ideas.each do |idea|
        idea.comments.order("created_at DESC")
      end
      @user_vote_ids = [];
      @user.votes.each do |vote|
      @user_vote_ids << vote.idea_id
      end
  end

  # def show
  #     @user = User.find(params[:id])
  #      @user_ideas = @user.ideas.order("created_at DESC")
  # end



end
