class Api::BookingsController < ApplicationController
  include ActionController::MimeResponds

def create
  # puts params
  @booking = Booking.create(
    name: params[:name]

  ) 

  render :json => {
      message: "hello!"
    }
end

def index
  @booking = Booking.all

    respond_to do |format|
      format.json{ render :index }
    end
  end
end