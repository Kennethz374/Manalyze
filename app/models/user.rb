class User < ApplicationRecord
  # has_secure_password

  def index
    user.name  
  end 
end
