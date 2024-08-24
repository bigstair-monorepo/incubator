#!/bin/bash

# Function to generate random values
generate_random() {
  echo "$(openssl rand -base64 32)"
}

# Generate environment variables
NEXT_PUBLIC_STRAPI_API_TOKEN=$(generate_random)
NEXT_PUBLIC_PAGE_LIMIT=6
NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN=$(generate_random)
NEXT_PUBLIC_STRAPI_API_URL=http://127.0.0.1:1337

# App details
APP_NAME="cfe"
HOST="0.0.0.0"
PORT="3000"

echo "🚀 Starting the setup process for Heroku app: $APP_NAME..."

# Create the Heroku app
echo "✨ Creating the Heroku app..."
heroku create $APP_NAME
echo "🌟 Heroku app created successfully!"

# Add the necessary buildpacks
echo "🔧 Adding buildpacks to Heroku app..."
heroku buildpacks:add --index 1 -a $APP_NAME heroku/nodejs
heroku buildpacks:add --index 2 -a $APP_NAME https://github.com/lstoll/heroku-buildpack-monorepo
echo "✔️ Buildpacks added!"

# Set environment variables
echo "🔑 Setting environment variables..."
heroku config:set NEXT_PUBLIC_STRAPI_API_TOKEN=$NEXT_PUBLIC_STRAPI_API_TOKEN \
  NEXT_PUBLIC_PAGE_LIMIT=$NEXT_PUBLIC_PAGE_LIMIT \
  NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN=$NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN \
  NEXT_PUBLIC_STRAPI_API_URL=$NEXT_PUBLIC_STRAPI_API_URL \
  HOST=$HOST \
  PORT=$PORT \
  --app $APP_NAME
echo "✅ Environment variables set!"

# Push code to Heroku
echo "📦 Pushing code to Heroku..."
git push heroku main
echo "🚀 Code pushed to Heroku successfully!"

# Optional: Run a command to build the Next.js app if needed
# echo "🔨 Building the Next.js app..."
# heroku run "yarn workspace frontend build" --app $APP_NAME

# Deploy the app
echo "🎉 Deployment completed! Visit your app at: https://$APP_NAME.herokuapp.com"
