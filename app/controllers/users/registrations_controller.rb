class Users::RegistrationsController < Devise::RegistrationsController
  
  # layout 'auth'
  
  def update
     @user = User.find(current_user.id)

     successfully_updated = if needs_password?(@user, params)
       @user.update_with_password(devise_parameter_sanitizer.sanitize(:account_update))
     else
       # remove the virtual current_password attribute
       # update_without_password doesn't know how to ignore it
       params[:user].delete(:current_password)
       params[:user].delete(:password)
       params[:user].delete(:password_confirmation)
       @user.update_without_password(devise_parameter_sanitizer.sanitize(:account_update))
     end

     if successfully_updated
       set_flash_message :notice, :updated
       # Sign in the user bypassing validation in case his password changed
       sign_in @user, :bypass => true
       redirect_to after_update_path_for(@user)
     else
       render "edit"
     end
   end

  def after_sign_up_path_for(resource)
    root_path
  end
  
  private

  # check if we need password to update user data
  # ie if password or email was changed
  # extend this as needed
  def needs_password?(user, params)
    user.email != params[:user][:email] ||
      params[:user][:password].present?
  end
  
end
