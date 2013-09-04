class IdeasController < ApplicationController
  before_action :set_idea, only: [:show, :edit, :update, :destroy]

  #all ideas
  def index
    @ideas = Idea.order("created_at DESC").paginate(:page => params[:page], :per_page => 10)
    @user = current_user
    @user_vote_ids = [];
    @user.votes.each do |vote|
      @user_vote_ids << vote.idea_id
    end
  end




  #save new idea
  def save
    @idea = Idea.create(
    title: params[:title],
    content: params[:content]
    )
    tag = Tag.where(name: params[:tag]).first_or_create
    @idea.tags << tag
    @idea.save
    current_user.ideas << @idea
    respond_to do |format|
      format.json {render json: @idea}
    end

  end






  # PATCH/PUT /ideas/1
  # PATCH/PUT /ideas/1.json
  def update
    @idea = Idea.find(params[:id])
    @idea.comments << params[:content]
    @idea.save
    current_user.comments << params[:content]
    current_user.save
    respond_to do |format|
      format.json {render json: @idea}
    end
  end

  # DELETE /ideas/1
  # DELETE /ideas/1.json
  def destroy
    @idea.destroy
    respond_to do |format|
      format.html { redirect_to ideas_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_idea
      @idea = Idea.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def idea_params
      params.require(:idea).permit(:title, :content, :tag)
    end
end
