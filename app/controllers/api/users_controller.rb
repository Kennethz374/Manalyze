class Api::UsersController < ApplicationController
  include ActionController::MimeResponds

  def index
    @users = User.all
    respond_to do |format|
      format.json{ render :index }
    end
  end
end