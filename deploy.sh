#!/bin/bash

# Exit script on any error
set -e

# Source the .env file
if [ -f .env ]; then
  source .env
else
  echo ".env file not found!"
  exit 1
fi

echo "Building the App..."
npm run build

echo "Creating Docker image..."
docker build --platform=linux/amd64 -t $GAME_REGISTRY:latest .

echo "Pushing Docker image to registry..."
docker login $GAME_REGISTRY
docker push $GAME_REGISTRY:latest

echo "Container pushed!"
