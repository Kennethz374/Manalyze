class Api::UsersController < ApplicationController
  include ActionController::MimeResponds

  def new
  end

  def create
  end
  
  def index
    @users = User.all
    respond_to do |format|
      format.json{ render :index }
    end
  end
end