class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :config_premitted_params, if: :devise_controller?

  protected

  # customize devise registration, add first_name and last_name to sign up
  def config_premitted_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  end
end
