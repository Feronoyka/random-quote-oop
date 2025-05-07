📉 Random Quotes Project (Vanilla + Node.js)

A project that displays random quotes with the option to mark them as favorites. It consists of a frontend (Vanilla JS) and a backend (Node.js).

# Project Structure

root/
├── client/ # frontend (Vanilla JS)
├── server/ # backend (Node.js + Express)

# Require Dependencies to file server

install dependencies

1. `cd server`
2. `npm install`

# Running in Development Mode

1. Client (Vanilla JS)
   `cd client`
   `npx live-server` (u can use either)

2. Server (Node.js)
   `cd server`
   `npm run dev` (uses nodemon)
   port uses: http://localhost:3000

# Run in Production Build the client (HTML/CSS/JS if needed)

1. Make sure the server is production-ready
2. Configure .env or set PORT manually
3. `cd server`
4. `npm start`
5. the project will be running on http://127.0.0.1:8080

📬 API Endpoints
Method: GET
URL: /quotes/random-quote
description: get delayed random quote

API_URL

1. In file client you can configure URL http://localhost:3000 to assigned URL http://www.example.com

✍️ Author
@Feronoyka
