# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Employee.destroy_all

employees = Employee.create([
  {
    name:"Kenneth",
    salary: 10000,
    picture: "https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    rating: 5
  },
  {
    name:"Sining",
    salary: 10,
    picture: "https://images.unsplash.com/photo-1560869631-a8eb0aa68932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 5
  }
])

User.destroy_all
users = User.create([
  {
    name:"Jeremy",
    email: "Jeremy@jeremy.com",
    gender: true,
    phoneNumber: 1,
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-U2JSWU7MW-5a0cee627163-512",
  },

  {
    name:"Denis",
    email: "Denis@Denis.com",
    gender: true,
    phoneNumber: 23,
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-UHACQE5B9-bc53831fb485-512",
    
  },

  {
    name:"Karl",
    email: "Karl@Karl.com",
    gender: true,
    phoneNumber: 4,
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-UJCML2N1E-eca98b7d4c5a-512",
  }

])