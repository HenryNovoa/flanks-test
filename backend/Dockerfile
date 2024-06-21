FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

# Install build tools for SQLite3
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
RUN npm rebuild sqlite3

COPY . .

EXPOSE 3000

CMD rm -f /app/data/database.sqlite && node sync.js && node index.js