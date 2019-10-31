class Api::ServicesController < ApplicationController
  include ActionController::MimeResponds

  def index
    @service = Service.all

    respond_to do |format|
      format.json{ render :index }
    end
  end
end