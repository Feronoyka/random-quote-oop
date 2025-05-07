📉 Random Quotes Project (Vanilla + Node.js)

A project that displays random quotes with the option to mark them as favorites. It consists of a frontend (Vanilla JS) and a backend (Node.js).

# Get random quote from local

## Get random quote from public API

### Get random quote from own API

📂 Project Structure
root/
├── client/ # frontend (Vanilla JS)
├── server/ # backend (Node.js + Express)

📦 Install Dependencies to file server
`cd server`
`npm install`

🖥️ Running in Development Mode

1. Client (Vanilla JS)
   `cd client`
   `npx live-server` (u can use either)

2. Server (Node.js)
   `cd server`
   `npm run dev` (uses nodemon)

🛠️ Run in Production Build the client (HTML/CSS/JS if needed)

1. Make sure the server is production-ready
2. Configure .env or set PORT manually
3. `cd server`
4. `npm start`

📬 API Endpoints
Method: GET
URL: /quotes/random-quote
description: get delayed random quote

API_URL

1. In file client you can configure URL http://localhost:3000 to assigned URL http://www.example.com

✍️ Author
@Feronoyka
