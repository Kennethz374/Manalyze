class Api::EmployeesController < ApplicationController
  include ActionController::MimeResponds

  def index
    @employees = Employee.all
    respond_to do |format|
      format.json{ render :index }
    end
  end
end