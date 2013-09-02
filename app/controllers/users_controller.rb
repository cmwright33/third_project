class UsersController < ApplicationController

  def index
    @user = current_user
    @user_ideas = @user.ideas
  end



end
