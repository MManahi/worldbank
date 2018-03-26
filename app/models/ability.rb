class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action  :read, :show, to: :authorized_user_states_allowed_actions
    alias_action  :create, :read, :show, :update, to: :data_entry_states_allowed_actions
    # Define abilities for the passed in user here. For example:
    user ||= User.new # guest user (not logged in)
    if user.present?
      can :show, User, id: user.id
      if user.role == 'admin'
        can :manage, :all
      elsif user.role == 'authorized_user'
        can :authorized_user_states_allowed_actions, State
      elsif user.role == 'data_entry'
        can :data_entry_states_allowed_actions, State
      end
    end
  end
end
