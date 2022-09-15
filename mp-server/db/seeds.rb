puts "🌱 Seeding messages..."

User.create([
  {
    name: "Liza Kotey",
    email: "lizak@gmail.com",
    password: "lizak"
  },
  {
    name: "Bernard Avle",
    email: "bavle@gmail.com",
    password: "bavle"
  },
  {
    name: "Malik Jabel",
    email: "malik@gmail.com",
    password: "malik"
  },
  {
    name: "Ibrahim Abdul",
    email: "ibrahim@gmail.com",
    password: "ibrahim"
  }
])

Missing.create(
  [
    {
      name: "Kila Ofori",
      age: 23,
      description: "Short hair with dark skin",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzS6FhNHXYLwYxxU1EkVzjKZO8HBRcqFQJhUjk50qzTYmLe0vwLv_uzH2IkLKZgnifB-M&usqp=CAU",
      location: "Adenta",
      date_missing: 12/10/2018,
      found: false,
      user_id: 3
    },
    {
      name: "Akua Donkor",
      age: 49,
      description: "Long hair with blue skin",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4bZQ0XueSie3UgP8coJ_3mDBge5TT1vcIe2CFTdq33OM5GrHkQqhceYjvWHfhGM6ibs&usqp=CAU",
      location: "Adenta",
      date_missing: 12/01/2018,
      found: false,
      user_id: 2
    },
    {
      name: "Kwame jokoto",
      age: 12,
      description: "Short hair with long legs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzS6FhNHXYLwYxxU1EkVzjKZO8HBRcqFQJhUjk50qzTYmLe0vwLv_uzH2IkLKZgnifB-M&usqp=CAU",
      location: "Achimota",
      date_missing: 12/10/2018,
      found: false,
      user_id: 3
    },
    {
      name: "Kofi Baboni",
      age: 1,
      description: "Short hair with dark skin",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzS6FhNHXYLwYxxU1EkVzjKZO8HBRcqFQJhUjk50qzTYmLe0vwLv_uzH2IkLKZgnifB-M&usqp=CAU",
      location: "Adenta",
      date_missing: 03/02/2022,
      found: true,
      user_id: 2
    },
    {
      name: "Aku Sika",
      age: 50,
      description: "Short hair with dark skin",
      image: "https://pickaface.net/gallery/avatar/20121012_072718_1430_RandomPerson.png",
      location: "Tema",
      date_missing: 01/10/2021,
      found: false,
      user_id: 3
    }
  ]
)


LastSeen.create(
  [
    {
      location_seen: "Madina",
      comments: "He was wearing a blue shirt",
      missing_id: 2,
      user_id: 3,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Accra",
      comments: "He was wearing a white shirt",
      missing_id: 2,
      user_id: 4,
      date_seen: 02/04/2020
    },
    {
      location_seen: "Tulaku",
      comments: "Couldn't talk to him",
      missing_id: 3,
      user_id: 1,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Somanya",
      comments: "He was wearing no shirt",
      missing_id: 3,
      user_id: 2,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Madina",
      comments: "He was wearing a blue shirt",
      missing_id: 4,
      user_id: 3,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Kumasi",
      comments: "He was wearing a blue shirt",
      missing_id: 4,
      user_id: 4,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Tamale",
      comments: "He was wearing a blue shirt",
      missing_id: 5,
      user_id: 1,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Atomic",
      comments: "He was wearing a blue shirt",
      missing_id: 5,
      user_id: 2,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Redco",
      comments: "He was wearing a blue shirt",
      missing_id: 1,
      user_id: 3,
      date_seen: 02/03/2020
    },
    {
      location_seen: "Koftown",
      comments: "He was wearing a blue shirt",
      missing_id: 1,
      user_id: 4,
      date_seen: 02/03/2020
    }
  ]
)

puts "✅ Done seeding!"
