
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
    patch '/missings/:id' do
      missing_people = Missing.find(params[:id])
      missing_people.update(
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

    patch '/users/:id' do
      users= User.find(params[:id])
      users.update(
       name: params[:name],
        email: params[:email],
        password: params[:password],
      )
      users.to_json
    end
    
    patch '/last_seens/:id' do
      reviews= LastSeen.find(params[:id])
      reviews.update(
       location_seen: params[:location_seen],
        comments: params[:comments],
        missing_id: params[:missing_id],
        user_id: params[:user_id]
        date_seen: params[:date_seen]
      )
      reviews.to_json
    end


  end
