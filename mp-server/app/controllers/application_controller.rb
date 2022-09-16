
  class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    # Add routes
    get '/missings' do
      # "Hello"
      missing_people = Missing.all.order(:created_at)
      missing_people.to_json(include: :last_seens)
    end

    get '/users' do
      # "Hello"
      user = User.all.order(:created_at)
      user.to_json(include: [:missings , :last_seens ])
    end

    get '/last_seens' do
      # "Hello"
      last_seen = LastSeen.all.order(:created_at)
      last_seen.to_json
    end

    post '/missings' do
      missing_people = Missing.create(
        name: params[:name],
        age: params[:age],
        description: params[:description],
        image: params[:image],
        location: params[:location],
        date_missing: params[:date_missing],
        found: params[:found],
        user_id: params[:user_id]
      )
      missing_people.to_json
    end

  end
