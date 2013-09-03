class VotesController < ApplicationController
  before_action :set_vote, only: [:show, :edit, :update, :destroy]

  # create a vote. add it to the idea fount from the vote button id
  def create
    vote = Vote.new
    @idea = Idea.find(params[:id])
    @idea.votes << vote
    @idea.save
    vote.save
    current_user.votes << vote
    current_user.save
    respond_to do |format|
      format.html
      format.js {}
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vote
      @vote = Vote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vote_params
      params[:vote]
    end
end
