Random Quotes Project (Vanilla + Node.js)

A project that displays random quotes with the option to mark them as favorites. It consists of a frontend (Vanilla JS) and a backend (Node.js).

# Project Structure

-root/
-├── client/ # frontend (Vanilla JS)
-├── server/ # backend (Node.js + Express)

# Require Dependencies to file server

## install dependencies only in the file server

1. `cd server`
2. `npm install`

# Running in Development Mode

## Client (Vanilla JS)

1. `cd client`
2. `npx live-server` (u can use either)

## Server (Node.js) open a new terminal window

1. `cd server`
2. `npm run dev`
3. will be running http://localhost:3000

# Running in Production Build the client (HTML/CSS/JS if needed)

1. Make sure the server is production-ready
2. Configure .env or set PORT manually

## Run server

In the file server instead of npm run dev (nodemon) use npm start

1. `cd server`
2. `npm start`

## Run client

In the `/client/src/config.js` replace API_URL from http://localhost:3000 to https://example.com

# API Endpoints

-Method: `GET`
-URL: `/quotes/random-quote`
-description: get delayed random quote
