# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
Service.destroy_all
Employee.destroy_all
User.destroy_all 
Booking.destroy_all

services = Service.create([
  {
  name: "Man's Hair Cut",
  price: 40
  },

  {
    name: "Shave and Facial massage",
    price: 25
  },

  {
  name: "Woman's Hair Cut",
  price: 50
  },

  {
    name: "Dye Hair",
    price: 100
  }
])


employees = Employee.create([
  {
    name:"Kenneth",
    salary: 10000,
    picture: "https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    rating: 5,
    description: "Hi, I am passionate about coding and want to solve problem by creating useful applications",
    title: "Owner",
    phone: "778 855 3333"
  },
  
  {
    name:"Sining",
    salary: 10,
    picture: "https://scontent-yyz1-1.cdninstagram.com/vp/d1bed3d9307350d7b783b8f649e653cc/5E383979/t51.2885-15/sh0.08/e35/s640x640/69926372_198128774535221_2316886523191485007_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=105",
    rating: 4,
    description: "Hi, let's do it !!! Just do it !!!",
    title: "Lead Hairstylist",
    phone: "778 888 8888"
  },

  {
    name:"Anthony",
    salary: 100,
    picture: "https://images.unsplash.com/photo-1533142215-a17cdfb95243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 4,
    description: "I am smart~ let's do it ~~~~~~",
    title: "Hairstylist",
    phone: "778 855 3332"

  },

  {
    name:"Jenny",
    salary: 100,
    picture: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 4,
    description: "I am smart~ let's do it ~~~~~~",
    title: "Hairstylist",
    phone: "778855 3334"

  }

])


fakeusers =User.create 
([
  {
    name:"Jeremy",
    email: "Jeremy@jeremy.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-U2JSWU7MW-5a0cee627163-512",
    password: "dfasdfasdfasdfasdfljliurpqwioeurp"
  },

  {
    name:"Denis",
    email: "Denis@Denis.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-UHACQE5B9-bc53831fb485-512",
    password: "dfasdfasdfasdfasdfljliurpqwioeurp"
  },

  {
    name:"Karl",
    email: "Karl@Karl.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-UJCML2N1E-eca98b7d4c5a-512",
    password: "dfasdfasdfasdfasdfljliurpqwioeurp"
  },

  {
    name:"Andrew",
    email: "Andrew@Andrew.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-UM2EZNKMY-794968593a45-512",
    password: "dfasdfasdfasdfasdfljliurpqwioeurp"
  },

  {
    name:"Nima",
    email: "Nima@Nima.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-U8M3MRRGE-ga3eb6ec7386-512",
    password: "dfasdfasdfasdfasdfljliurpqwioeurp"
  },

  {
    name:"Aaron",
    email: "Aaron@Aaron.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-U2J4W64JE-g91b09e8013e-512",
    password: "dfasdfasdfasdfasdfljliurpqwioeurp"
  }
])


def fakeUsers 
  @i = 0
  
  @fakers = []
  until @i == 300 do
    @fakers.push({
      name:Faker::Name.unique.name,
      email: Faker::Internet.unique.email,
      gender: Faker::Gender.binary_type,
      phoneNumber: Faker::PhoneNumber.unique.phone_number,
      pictures: Faker::Avatar.image,
      password: Faker::String.random(length: 10)
    })
    @i += 1
  end

  return @fakers
end  
users = User.create!(fakeUsers)


def fakeBookings
  @i = 0
  @fakeBookings = []
  until @i == 300 do
    @fakeBookings.push({
      user_id: Faker::Number.between(from: 1, to: 300),
      employee_id: Faker::Number.between(from: 1, to: 4),
      date: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now + 60, format: :short),
      notes: Faker::Quote.robin,
      service_id: Faker::Number.between(from: 1, to: 4)
    })
    @i += 1
  end

  return @fakeBookings
end  
fakebookings = Booking.create!(fakeBookings)




