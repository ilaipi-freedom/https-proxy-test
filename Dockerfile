FROM node:lts-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY app.js .

CMD ["node", "app.js"]
