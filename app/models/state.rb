class State < ApplicationRecord
  belongs_to :user

   scope :states_asia, -> {where(state_continent: 'اسيا')}
   scope :states_africa, -> {where(state_continent: 'افريقيا')}
   scope :states_north_america, -> {where(state_continent: 'امريكا الشمالية')}
   scope :states_south_america, -> {where(state_continent: 'امريكا الجنوبية')}
   scope :states_australia, -> {where(state_continent: 'استراليا')}
end
