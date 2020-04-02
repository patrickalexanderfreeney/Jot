# Users
patrick = User.create(name:"Patrick", email:"patrick@gmail.com", password:"thought123")
lisa = User.create(name:"Lisa", email:"lisa@gmail.com", password:"thought456")

# Thoughts
Thought.create(title:"Test Title 1", body:"Test Body 1", tags:"Tag1, Tag2",user_id:lisa.id )
Thought.create(title:"Test Title 2", body:"Test Body 2", tags:"Tag2, Tag4",user_id:lisa.id )
Thought.create(title:"Test Title 3", body:"Test Body 3", tags:"Tag5, Tag6",user_id:patrick.id )
Thought.create(title:"Test Title 4", body:"Test Body 4", tags:"Tag7, TagT",user_id:patrick.id )
Thought.create(title:"Test Title 1", body:"Test Body 1", tags:"Tag1, Tag2",user_id:lisa.id )
Thought.create(title:"Test Title 2", body:"Test Body 2", tags:"Tag2, Tag4",user_id:lisa.id )
Thought.create(title:"Test Title 3", body:"Test Body 3", tags:"Tag5, Tag6",user_id:patrick.id )
Thought.create(title:"Test Title 4", body:"Test Body 4", tags:"Tag7, TagT",user_id:patrick.id )
Thought.create(title:"Test Title 1", body:"Test Body 1", tags:"Tag1, Tag2",user_id:lisa.id )
Thought.create(title:"Test Title 2", body:"Test Body 2", tags:"Tag2, Tag4",user_id:lisa.id )
Thought.create(title:"Test Title 3", body:"Test Body 3", tags:"Tag5, Tag6",user_id:patrick.id )
Thought.create(title:"Test Title 4", body:"Test Body 4", tags:"Tag7, TagT",user_id:patrick.id )

# Confirmation
puts "DB is seeded!"