class AuthController < ApplicationController
  require 'google/apis/calender_v3'
  require 'google/apis/people_v1'

  def fetch_code
    setup_client
    @client.update!(
      scope: "profile email #{Google::Apis::CalenderV3::AUTH_CALENDAR}",
      access_type: 'offline'
    )
    auth_uri = @client.authorization_uri.to_s
    redirect_to auth_uri
  end

  def oauth2callback
    setup_client
    @client.code = params[:code]
    @client.fetch_access_token!
    @user = User.new(access_token: @client.access_token, refresh_token: @client.refresh_token)
    response = request_email_and_name
    if create_or_update_user(response)
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def request_email_and_name
    people = Google::Apis::PeopleV1
    people_service = people::PeopleService.new

    people_options = {
      request_mask_include_field: 'person.emailAddresses,person.names',
      options: { authorization: @client }
    }

    people_service.get_person('people/me', people_options)
  end

  def create_or_update_user(response)
    email = response.email_addresses[0].value
    @user = User.find_by(email: email)
    if @user.nil?
      name = response.names[0].given_name
      @user = User.new(email: email, name: name)
    end
    @user.access_token = @client.access_token
    @user.refresh_token ||= @client.refresh_token
    @user.save
  end

end
