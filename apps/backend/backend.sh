#!/bin/bash

# Function to display a spinner while processing
spin() {
  local pid=$!
  local delay=0.75
  local spinstr='|/-\\'
  while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
    local temp="${spinstr#?}"
    printf " [%c]  " "$spinstr"
    spinstr="$temp${spinstr%"$temp"}"
    sleep $delay
    printf "\b\b\b\b\b\b"
  done
  printf "    \b\b\b\b"
}

# Function to display a loading message
loading() {
  echo "Starting the setup process..."
  sleep 1
}

# Check if the app exists, if not, create it
echo "Checking if Heroku app 'cbend' exists..."
loading
if ! heroku apps:info --app cbend > /dev/null 2>&1; then
  echo "Creating Heroku app 'cbend'..."
  heroku create cbend &
  spin
  echo "Heroku app 'cbend' created!"
else
  echo "Heroku app 'cbend' already exists."
fi

# Generate random values
echo "Generating random values..."
loading
APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32)
API_TOKEN_SALT=$(openssl rand -base64 16)
ADMIN_JWT_SECRET=$(openssl rand -base64 32)
JWT_SECRET=$(openssl rand -base64 32)
TRANSFER_TOKEN_SALT=$(openssl rand -base64 16)
echo "Random values generated!"

# Set environment variables in Heroku
echo "Setting environment variables in Heroku..."
loading
heroku config:set HOST=127.0.0.1 \
PORT=1337 \
APP_KEYS=$APP_KEYS \
API_TOKEN_SALT=$API_TOKEN_SALT \
ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET \
JWT_SECRET=$JWT_SECRET \
TRANSFER_TOKEN_SALT=$TRANSFER_TOKEN_SALT \
APP_BASE=packages/backend \
--app cbend &
spin
echo "Environment variables set!"

# Check existing buildpacks
echo "Checking existing buildpacks..."
loading
existing_buildpacks=$(heroku buildpacks --app cbend)

# Add necessary buildpacks to the Heroku app
echo "Adding buildpacks to Heroku..."
loading
if ! echo "$existing_buildpacks" | grep -q "heroku/nodejs"; then
  heroku buildpacks:add --index 1 -a cbend heroku/nodejs
fi

if ! echo "$existing_buildpacks" | grep -q "heroku-community/yarn"; then
  heroku buildpacks:add --index 2 -a cbend heroku-community/yarn
fi

if ! echo "$existing_buildpacks" | grep -q "https://github.com/lstoll/heroku-buildpack-monorepo"; then
  heroku buildpacks:add --index 3 -a cbend https://github.com/lstoll/heroku-buildpack-monorepo
fi
spin
echo "Buildpacks added!"

# Push the code to Heroku
echo "Pushing code to Heroku..."
loading
git push heroku main &
spin
echo "Code pushed to Heroku! 🎉🚀"
