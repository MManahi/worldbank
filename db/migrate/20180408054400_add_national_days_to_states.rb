class AddNationalDaysToStates < ActiveRecord::Migration[5.1]
  def change
    add_column :states, :national_days, :string
  end
end
