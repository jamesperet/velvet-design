class StartController < ApplicationController
  
  layout 'velvet_layout'
  
  def index
    @blog_posts = BlogPost.order('created_at DESC').take(4)
  end

end
