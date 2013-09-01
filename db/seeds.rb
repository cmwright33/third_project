# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



100.times do |n|
  Idea.create(title: "#{n}", content: "this is great content for #{n} idea", tag: "this #{n}", user_id: "#{n}")
end


50.times do |n|
  User.create(username: "John Doe#{n}", email: "john#{n}@gmail.com", password: 'topsecret', password_confirmation: 'topsecret')
end




200.times do |n|
  Comment.create(content: "this is comment #{n}")
end

