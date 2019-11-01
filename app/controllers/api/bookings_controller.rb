class Api::BookingsController < ApplicationController
  include ActionController::MimeResponds

def create
  @book = Booking.create(
    user_id: params[:user_id],
    date: params[:date],
    employee_id: params[:employee_id]
  ) 
  # @bookingService=BookingSerivce.create(
  #   booking_id: @book.id
  #   service_id: param[:checkbox]
  # )


    respond_to do |format|
      format.json{ render :create }
    end
end

def index
  @bookings = Booking.all

    respond_to do |format|
      format.json{ render :index }
    end
  end
end