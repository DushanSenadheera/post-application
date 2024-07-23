#!/bin/bash

# navigate to server directory
cd server

# install server packages
echo "Installing server packages..."
npm install

# navigate to client directory
cd ../client

# install client packages
echo "Installing client packages..."
npm install

echo "Installation complete."