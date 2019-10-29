class Api::EmployeesController < ApplicationController
  include ActionController::MimeResponds

  # def show
  #   @employee = Employee.find(params[:id])
  #   @clients = @employee.clients
  # end
  # query

  def index
    @employees = Employee.all

    respond_to do |format|
      format.json{ render :index }
    end
  end
end