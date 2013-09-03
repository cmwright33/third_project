class UsersController < ApplicationController

  def index
    @user = current_user
    @user_ideas = @user.ideas.order("created_at DESC")
    @user_ideas.each do |idea|
      idea.comments.order("created_at DESC")
    end

  end



end
