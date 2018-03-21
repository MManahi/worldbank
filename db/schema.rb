# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180321171533) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "states", force: :cascade do |t|
    t.string "state_name"
    t.string "state_official_name"
    t.string "state_name_en"
    t.string "state_official_name_en"
    t.string "state_continent"
    t.string "state_size"
    t.string "state_population"
    t.text "state_major_cities"
    t.string "state_official_lang"
    t.string "state_currency"
    t.string "state_religion"
    t.text "state_neighbors"
    t.text "state_nature"
    t.text "state_provinces"
    t.string "state_flag"
    t.string "state_map"
    t.text "state_origin"
    t.text "state_political_background"
    t.text "state_regime_type"
    t.text "state_goverment"
    t.text "state_constitution"
    t.text "state_foreign_affairs"
    t.text "state_current_issues"
    t.text "state_political_parties"
    t.text "state_regime_members"
    t.text "state_international_representation"
    t.text "state_relations_with_palestine"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_states_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "states", "users"
end
