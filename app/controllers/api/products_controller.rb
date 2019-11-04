class Api::ProductsController < ApplicationController
  include ActionController::MimeResponds

  def index
    @products = Product.all

    respond_to do |format|
      format.json{ render :index }
    end
  end
end