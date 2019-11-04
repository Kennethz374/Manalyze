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

User.destroy_all 
# const allUsers = function() {
#   let (i = 0; i < 100; i++) {
#     {
#       name:Faker::Name.unique.name,
#       email: Faker::Internet.unique.email,
#       gender: Faker::Gender.unique.type,
#       phoneNumber: Faker::PhoneNumber.unique.phone_number,
#       pictures: "https://ca.slack-edge.com/T2G8TE2E5-U2JSWU7MW-5a0cee627163-512",
#     }
#   }
# }

users = User.create([
  {
    name:"Jeremy",
    email: "Jeremy@jeremy.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-U2JSWU7MW-5a0cee627163-512",
  },

  {
    name:"Denis",
    email: "Denis@Denis.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-UHACQE5B9-bc53831fb485-512",
    
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
  },
  
  {
    name:"Denis",
    email: "Denis@Denis.com",
    gender: "Male",
    phoneNumber: "7788888888",
    pictures: "https://ca.slack-edge.com/T2G8TE2E5-UHACQE5B9-bc53831fb485-512",
    password: "dfdfdafsdfasdf"
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
  },

])
# bookings = []
# for(i < 100) {
#   bookings.push({
#     "user_id": 2,
#     "employee_id": 1,
#     "date": "2019-11-04T16:30:00.000Z",
#     "notes": "i might be late a bit",
#     "created_at": "2019-10-31T20:39:11.631Z",
#     "updated_at": "2019-10-31T20:39:11.631Z"
#     })
# }
Booking.destroy_all
users = Booking.create([
  {
    user_id: 1,
    employee_id: 1,
    date: "Thursday, Oct 31 17:00",
    notes: "please prepare hot towel for me"
  },

  {
    user_id: 2,
    employee_id: 1,
    date: "Thursday, Nov 4 16:30",
    notes: "i might be late a bit"
  },

  {
    user_id: 3,
    employee_id: 1,
    date: "Thursday, Nov 2 16:30",
    notes: "I like kenneth so much"
  },

  {
    user_id: 4,
    employee_id: 1,
    date: "Thursday, Nov 1 16:30",
    notes: ""
  },

  {
    user_id: 5,
    employee_id: 2,
    date: "Thursday, Oct 31 16:30",
    notes: ""
  },

  {
    user_id: 6,
    employee_id: 2,
    date: "Thursday, Oct 30 16:30",
    notes: "give me discount"
  },

])



Product.destroy_all
products=Product.create([

  {
    name:'Moroccanoil',
    description:'An shampooing hydratant quotidien infusé d’huile d’argan riche en antioxydants qui reconstitue les nutriments pour désaltérer et nourrir les cheveux secs.',
    price:30,
    quantity:15,
    picture:"https://www.sephora.com/productimages/sku/s1999630-main-zoom.jpg"
  },
  {
    name:'Kerastase',
    description:'An innovative shampoo specially formulated to treat dry, sensitized hair.',
    price:40,
    quantity:10,
    picture:"https://www.sephora.com/productimages/sku/s2126902-main-zoom.jpg"
  },
  {
    name:'Oribe',
    description:'Discover the fountain of youth for soft, shiny, ageless hair with Oribe Gold Lust Repair & Restore Conditioner. Blending time-honoured oils and extracts — Cypress, Argan and Maraca — with our revolutionary bio-restorative complex, this ultra-hydrating conditioner softens and revitalizes, smoothing each cuticle to undo the damage of time and style.',
    price:200,
    quantity:15,
    picture:"https://s7d9.scene7.com/is/image/HoltRenfrew1/u_811913014882_01"
  },
  {
    name:'Jack Black Shaving Gel',
    description:'This powerful, non-greasy Jack Black Dry Erase™ Ultra-Calming Face Cream provides immediate and lasting moisturization for dry skin, calms sensitive skin, and helps reduce redness and irritation. The exclusive formula mimics the structure of natural skin lipids by trapping essential moisture and aiding in the repair and replenishment of the skin’s natural protective barrier. Fortified with skin comforters and anti-irritants, it calms irritated skin and helps reduce redness.',
    price:23,
    quantity:21,
    picture:"https://cdn.shopify.com/s/files/1/0812/3241/products/JAC1003-Jack-Black-post-shave-cooling-gel_x1024.jpeg?v=1556268592"
  },


])