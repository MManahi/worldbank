module DeviseHelper
  def devise_error_messages!
    return '' unless devise_error_messages?

    sentence = 'خطأ، يرجى التأكد من البيانات'

    html = <<-HTML
    <div class="mx-auto col-md-4 alert alert-danger alert-with-icon" data-notify="container">
      <div class="container">
        <div class="alert-wrapper text-center">
          <i class="fa fa-bell"></i>
          <div class="separator">
            <div class="message text-center" dir="rtl">
              <div id="error_explanation">
                <p>#{sentence}</p>
              </div></div>
          </div>
        </div>
      </div>
    </div>

    HTML

    html.html_safe
  end

  def devise_error_messages?
    !resource.errors.empty?
  end
end
