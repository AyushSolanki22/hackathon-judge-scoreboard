<<<<<<< HEAD
# 🏆 HackScore — Hackathon Judge & Live Scoreboard

Full-stack implementation of Task 5: Hackathon Judge & Live Scoreboard.

## Stack
- Frontend: React + Vite + CSS
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Real-time: Socket.IO

## Backend MVC
```text
Routes → Controllers → Models → MongoDB
                 ↓
              Socket.IO
```

## Structure
```text
HackScore_MERN_MVC/
├── client/
│   └── src/
│       ├── main.jsx
│       └── styles.css
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   ├── server.js
│   │   └── seed.js
│   └── .env.example
├── DEPLOYMENT.md
└── package.json
```

## Requirements covered
- Judge selects Team ID
- Innovation 1–10
- Code Quality 1–10
- Presentation 1–10
- Submit/update scores
- Aggregate scores from judges
- Calculate averages
- Rank teams automatically
- Show top 10
- Real-time leaderboard updates

## Local setup

1. Create a MongoDB Atlas cluster and database user.
2. Create `server/.env` from `.env.example`.
3. Create `client/.env` with `VITE_API_URL=http://localhost:5000`.
4. From root:

```bash
npm install
npm run install-all
cd server
npm run seed
cd ..
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000/api/health

## API
```text
GET  /api/health
GET  /api/teams
POST /api/teams
GET  /api/judges
POST /api/judges
GET  /api/scores
GET  /api/scores?judgeId=<id>
GET  /api/scores/leaderboard
POST /api/scores
```

Do not commit `.env`, MongoDB passwords, API keys or tokens.
=======
# hackathon-judge-scoreboard
>>>>>>> 3eec94c033da6f51b50899e5f513c23740273d30
