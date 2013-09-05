class TagsController < ApplicationController
  before_action :set_tag, only: [:show, :edit, :update, :destroy]


  def index
    @tag = Tag.where(name: params[:name]).order("created_at DESC")
    respond_to do |format|
      format.html
      format.js {}
    end
  end


  def user_show
    @tag = Tag.where(name: params[:name])
    @tagged_ideas = []
    @tag.first.ideas.each do |idea|
      if idea.user_id == params[:userId].to_i
        @tagged_ideas << idea
      end
    end
    respond_to do |format|
      format.html
      format.js {}
    end
  end



  private

    def set_tag
      @tag = Tag.find(params[:id])
    end


    def tag_params
      params[:tag]
    end
end
