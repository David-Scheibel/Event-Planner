# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroys seed data
puts "destroying all users ..."
User.destroy_all
puts "destroying all profies ..."
Profile.destroy_all
puts "destroying all events ..."
Event.destroy_all
puts "destroying all categories ..."
Category.destroy_all
puts "destroying all thumbnails ..."
Thumbnail.destroy_all

# resets id info of seed data to 1
puts "resetting all users ..."
User.reset_pk_sequence
puts "resetting all profiles ..."
Profile.reset_pk_sequence
puts "resetting all events ..."
Event.reset_pk_sequence
puts "resetting all categories ..."
Category.reset_pk_sequence
puts "resetting all thumbnails ..."
Thumbnail.reset_pk_sequence

# creates seed data
puts "creating users..."
    User.create(username: "David1990", email:"dvdscheibel@yahoo.com", password:"password")
    User.create(username: "Patt Heflin", email:"pat_hef@yahoo.com", password:"password")

puts "creating profiles..."
    Profile.create(user_id: User.first.id, nickname:"Egregious")
    Profile.create(user_id: User.second.id, nickname:"MadDog")

puts "creating events..."
    Event.create(title: "Test date reverse", 
                 start: "2021-08-3 4:00 PM", 
                 end: "", 
                 description: "Very good, yes.", 
                 profile_id: Profile.first.id)
    Event.create(title: "Bar Crawl", 
                 start: "8/6/21 4:00 PM", 
                 end: "8-8-21, 12:00", 
                 description: "Very good, yes.", 
                 profile_id: Profile.first.id)
    Event.create(title: "Doctor's Appointment", 
                 start: "08-09-21 2:00 PM", 
                 end: "08-09-21 3:00 PM", 
                 description: "We hate the doctors...", 
                 profile_id: Profile.first.id)
    Event.create(title: "Game of Thrones Marathon", 
                 start: "08-17-21, 15:00:00", 
                 end: "", description: "It's what I do. I drink and I know things.", 
                 profile_id: Profile.first.id)
    Event.create(title: "Beach Week/end", 
                 start: "08-19-21, 21:00:00", 
                 end: "8/21/21, 12:00", 
                 description: "Because Dad ruined our first one.", 
                 profile_id: Profile.first.id)
    Event.create(title: "Paint Staring Contest", 
                 start: "08-23-21, 17:00:00", 
                 end: "08-26-21, 12:00:00", 
                 description: "Paint is so alluring.", 
                 profile_id: Profile.first.id)
    Event.create(title: "Renew Liscence", 
                 start: "09-01-21, 17:00:00", 
                 end: "", 
                 description: "Paint is so alluring.", 
                 profile_id: Profile.first.id)
    Event.create(title: "9/11 20 Year Memorial", 
                 start: "09-11-21, 12:00:00", 
                 end: "", 
                 description: "Send regards to NYC family.", 
                 profile_id: Profile.first.id)
    Event.create(title: "Dad's Birthday", 
                 start: "09-15-21, 12:00:00", 
                 end: "", 
                 description: "Dad's 71st Birthday! Remember to get him something Nats related.", 
                 profile_id: Profile.first.id)    
    Event.create(title: "Class Reunion", 
                 start: "09-26-21, 18:00:00", 
                 end: "09-26-21, 22:00:00", 
                 description: "Meet up with FlatIron cohort!", 
                 profile_id: Profile.first.id)
    Event.create(title: "Oktoberfest!", 
                 start: "09-15-21, 12:00:00", 
                 end: "09-17-21, 22:00:00", 
                 description: "We're going even though it's canceled", 
                 profile_id: Profile.first.id)   

    Event.create(title: "Pool Party", 
                 start: "08-03-21, 15:00:00", 
                 end: "8-4-21, 12:00:00", 
                 description: "a fun day at the pool because lord knows we need margaritas", 
                 profile_id: Profile.second.id)
    Event.create(title: "Orthodontist", 
                 start: "08-09-21, 13:00:00", 
                 end: "08-09-21, 15:00:00", 
                 description: "Meeting with Dr. Doctor at the Doctor's office", 
                 profile_id: Profile.second.id)
    Event.create(title: "Game of Thrones Marathon", 
                 start: "08-17-21, 15:00:00", 
                 end: "", 
                 description: "everyone needs a good Game of Thrones marathon now and then", 
                 profile_id: Profile.second.id)
    Event.create(title: "Florida Trip", 
                 start: "08-19-21, 21:00:00", 
                 end: "", 
                 description: "Ten bucks says Levi will be another Florida man", 
                 profile_id: Profile.second.id)
    Event.create(title: "Mardi Gras", 
                 start: "08-23-21, 17:00:00", 
                 end: "08-26-21, 12:00:00", 
                 description: "Let's get plastered!", 
                 profile_id: Profile.second.id)

puts "creating categories..."
    Category.create(name: "House Party", event_id: Event.first.id)
    Category.create(name: "House Party", event_id: Event.fifth.id)
    Category.create(name: "BBQ", event_id: Event.third.id)
    Category.create(name: "Mountain Climbing", event_id: Event.fourth.id)
    Category.create(name: "Bar Crawl", event_id: Event.all.sample.id)
    Category.create(name: "Bowling", event_id: Event.second.id)
    Category.create(name: "Fairground Excursion", event_id: Event.all.sample.id)
    Category.create(name: "River & Camping", event_id: Event.all.sample.id)

puts "creating thumbnails..."
    # Thumbnail.create(image: "this_is_a_great_image", event_id: Event.all.sample.id)
    Thumbnail.create(image: "https://cdn.sanity.io/images/0vv8moc6/hcplive/c6a1bdd525a3983c7e0503b6cd7da08fb02b7980-483x288.jpg", event_id: 3)