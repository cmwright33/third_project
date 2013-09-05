class TagsController < ApplicationController
  before_action :set_tag, only: [:show, :edit, :update, :destroy]

  # GET /tags
  # GET /tags.json
  def index
    @tag = Tag.where(name: params[:name]).order("created_at DESC")
    respond_to do |format|
      format.html
      format.js {}
    end
  end


  def index_show
    @tag = Tag.where(name: params[:name]).order("created_at DESC")
    respond_to do |format|
      format.html
      format.js {}
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tag
      @tag = Tag.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tag_params
      params[:tag]
    end
end
