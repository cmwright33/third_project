class UsersController < ApplicationController

  def index
    if current_user.nil?
      redirect_to new_user_session_path
    else
        @user = current_user
        @user_ideas = @user.ideas.order("created_at DESC")
        @user_ideas.each do |idea|
          idea.comments.order("created_at DESC")
        end
    end

  end



end
