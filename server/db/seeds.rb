User.destroy_all 
Jot.destroy_all

# Users
patrick = User.create(username:"Patrick", password:"thought123")
lisa = User.create(username:"Lisa", password:"thought456")

# Thoughts
Jot.create(title:"Test Title 1", body:"Test Body 1", tags:"Tag1, Tag2",user_id:lisa.id )
Jot.create(title:"Test Title 2", body:"Test Body 2", tags:"Tag2, Tag4",user_id:lisa.id )
Jot.create(title:"Test Title 3", body:"Test Body 3", tags:"Tag5, Tag6",user_id:patrick.id )
Jot.create(title:"Test Title 4", body:"Test Body 4", tags:"Tag7, TagT",user_id:patrick.id )
Jot.create(title:"Test Title 1", body:"Test Body 1", tags:"Tag1, Tag2",user_id:lisa.id )
Jot.create(title:"Test Title 2", body:"Test Body 2", tags:"Tag2, Tag4",user_id:lisa.id )
Jot.create(title:"Test Title 3", body:"Test Body 3", tags:"Tag5, Tag6",user_id:patrick.id )
Jot.create(title:"Test Title 4", body:"Test Body 4", tags:"Tag7, TagT",user_id:patrick.id )
Jot.create(title:"Test Title 1", body:"Test Body 1", tags:"Tag1, Tag2",user_id:lisa.id )
Jot.create(title:"Test Title 2", body:"Test Body 2", tags:"Tag2, Tag4",user_id:lisa.id )
Jot.create(title:"Test Title 3", body:"Test Body 3", tags:"Tag5, Tag6",user_id:patrick.id )
Jot.create(title:"Test Title 4", body:"Test Body 4", tags:"Tag7, TagT",user_id:patrick.id )

# Confirmation
puts "DB is seeded!"