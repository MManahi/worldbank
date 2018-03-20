class StaticPagesController < ApplicationController
  def index
     @disable_page_header = true
  end

  def about
  end
end
