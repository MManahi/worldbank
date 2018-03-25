class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :config_premitted_params, if: :devise_controller?

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to main_app.root_url, alert: "عذرا، لايمكنك الوصول الى هذه الصفحة، انت مستخدم غير مسجل او انك لا تمتلك الصلاحية للقيام بذلك"
  end
  protected

  # customize devise registration, add first_name and last_name to sign up
  def config_premitted_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  end
end
