class CreateStates < ActiveRecord::Migration[5.1]
  def change
    create_table :states do |t|
      t.string :state_name
      t.string :state_official_name
      t.string :state_name_en
      t.string :state_official_name_en
      t.string :state_continent
      t.string :state_size
      t.string :state_population
      t.text :state_major_cities
      t.string :state_official_lang
      t.string :state_currency
      t.string :state_religion
      t.text :state_neighbors
      t.text :state_nature
      t.text :state_provinces
      t.string :state_flag
      t.string :state_map
      t.text :state_origin
      t.text :state_political_background
      t.text :state_regime_type
      t.text :state_goverment
      t.text :state_constitution
      t.text :state_foreign_affairs
      t.text :state_current_issues
      t.text :state_political_parties
      t.text :state_regime_members
      t.text :state_international_representation
      t.text :state_relations_with_palestine
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
