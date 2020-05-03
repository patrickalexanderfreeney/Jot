ActiveRecord::Schema.define(version: 2020_05_02_223702) do

  create_table "jots", force: :cascade do |t|
    t.string "title"
    t.string "body"
    t.string "tags"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
