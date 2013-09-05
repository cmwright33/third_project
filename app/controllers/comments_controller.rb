class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all
  end


  #create a new comment and save it to an idea.
  def create
    @comment = Comment.create(content: params[:content])
    current_user.comments << @comment
    current_user.save

    idea = Idea.find(params[:ideaId])
    idea.comments << @comment
    idea.comments.order("created_at DESC")
    idea.save
    respond_to do |format|
      format.json {render json: @comment}
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:content)
    end
end
