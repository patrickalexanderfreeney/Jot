# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

beyonce = User.create(name:"Queen Bey", email: "queenbey@gmail.com", password:"password123")

Thought.create(title:"Did I wake up like this?", body:"Mostly no. LOL",tags:"deepthoughts", user_id:beyonce.id)
