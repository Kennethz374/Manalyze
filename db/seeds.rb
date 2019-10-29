# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

employees = Employee.create([
  {
    name:"Kenneth",
    salary: 10000,
    picture: "https://images.unsplash.com/photo-1560259266-5b736e675d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 5
  },
  {
    name:"Sining",
    salary: 10,
    picture: "https://images.unsplash.com/photo-1560869631-a8eb0aa68932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 5
  }
])