class AuthController < ApplicationController
  require 'google/apis/calender_v3'

  def fetch_code
    setup_client
    @client.update!(
      scope: "profile email #{Google::Apis::CalenderV3::AUTH_CALENDAR}",
      access_type: 'offline'
    )
    auth_uri = @client.authorization_uri.to_s
    redirect_to auth_uri
  end

end
